import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL, SECRET_KEY } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

//ADMINISTRATION LOGIN AUTHENTICATION
if (!SECRET_KEY) {
  console.error("Error: No secret key found in .env file.");
  process.exit(1);
}

client
  .connect()
  .then(() => {
    console.log("Connected to the QUEST database");
  })
  .catch((err) => {
    console.error("Error connecting to the QUEST database:", err.message);
    process.exit(1);
  });

app.use(express.json());
// ADMIN LOGIN
const adminAccount = {
  username: "admin",
  passwordHash: "$2b$10$6h2O/QnVoMaaBvtVVYR2KuJDcC3Jg3.NYKF/pJ98YIt4n4MIYc2CS",
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // CONDITIONAL FOR LOGGING IN TO THE ADMIN ACCOUNT
  if (
    username === adminAccount.username &&
    bcrypt.compareSync(password, adminAccount.passwordHash)
  ) {
    const token = jwt.sign({ username: adminAccount.username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials! You shall not pass." });
  }
});
// LOGIN COMPLETE

app.get("/api/commands", getCommands);
app.get("/api/commands/:id", getCommandsByCategoryId);
app.get("/api/categories", getCategories);
app.post("/api/commands", postCommands);
app.patch("/api/commands/:id", editCommands);
app.delete("/api/commands/:id", deleteCommands);

async function getCommands(_, res, next) {
  try {
    const data = await client.query("SELECT * FROM commands");
    res.send(data.rows);
  } catch (error) {
    next(error);
  }
}

async function getCategories(_, res, next) {
  try {
    const data = await client.query("SELECT * FROM categories");

    res.send(data.rows);
  } catch (error) {
    next(error);
  }
}

async function getCommandsByCategoryId(req, res, next) {
  const id = Number(req.params.id);
  try {
    const data = await client.query(
      "SELECT * FROM commands WHERE category_id = $1",
      [id]
    );
    res.send(data.rows);
  } catch (error) {
    next(error);
  }
}

async function postCommands(req, res, next) {
  const { category_id, command_syntax, command_description } = req.body;
  try {
    const data = await client.query(
      "INSERT INTO commands(category_id, command_syntax, command_description) VALUES ($1, $2, $3) RETURNING *",
      [category_id, command_syntax, command_description]
    );
    res.status(201).json(data.rows[0]);
  } catch (error) {
    next(error);
  }
}

async function editCommands(req, res, next) {
  const commandId = Number.parseInt(req.params.id);
  const { category_id, command_syntax, command_description } = req.body;
  try {
    const data = await client.query(
      `UPDATE commands SET
      category_id = COALESCE ($1, category_id),
      command_syntax = COALESCE ($2, command_syntax), 
      command_description = COALESCE ($3, command_description)
      WHERE id = $4 RETURNING *`,
      [category_id, command_syntax, command_description, commandId]
    );
    if (data.rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(data.rows[0]);
    }
  } catch (error) {
    next(error);
  }
}

async function deleteCommands(req, res, next) {
  const id = Number(req.params.id);
  try {
    const data = await client.query(
      "DELETE FROM commands WHERE id = $1 RETURNING *",
      [id]
    );
    if (data.rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(data.rows[0]);
    }
  } catch (error) {
    next(error);
  }
}

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.error("Global error: ", err);
  res.status(500).json({ error: "Internal Servor Error" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
