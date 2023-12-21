import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL, SECRET_KEY, ADMIN_HASH } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(cors());
app.use(express.json());

// ADMIN LOGIN
const adminAccount = {
  username: "admin",
  passwordHash: ADMIN_HASH,
};

// TOKEN VERIFICATION FOR ADMIN RIGHTS TO ADD, UPDATE, DELETE
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.decoded = decoded;
    next();
  });
};

app.post("/api/login", (req, res) => {
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

// ROUTES WITH ADMIN TOKEN VERIFICATION
app.post("/api/commands", verifyToken, postCommands);
app.patch("/api/commands/:id", verifyToken, editCommands);
app.delete("/api/commands/:id", verifyToken, deleteCommands);

// ROUTES
app.get("/api/commands", getCommands);
app.get("/api/commands/:id", getCommandsByCategoryId);
app.get("/api/categories", getCategories);
//

//FETCH COMMANDS
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

//ADMIN POST, PATCH, DELETE
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
