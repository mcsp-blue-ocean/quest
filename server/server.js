import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL, AI_API } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

app.get("/api/commands", getCommands);
app.get("/api/commands/:id", getCommandsByCategoryId);
app.get("/api/categories", getCategories);
app.post("/api/commands", postCommands);
app.patch("/api/commands/:id", editCommands);
app.delete("/api/commands/:id", deleteCommands);
app.post("/api/chat", postChat);

async function getCommands(_, res, next) {
  try {
    const data = await client.query(
      "SELECT * FROM commands ORDER BY command_syntax ASC"
    );
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
      "SELECT * FROM commands WHERE category_id = $1 ORDER BY command_syntax ASC",
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

async function postChat(req, res, next) {
  const { message, messages } = req.body;
  try {
    const response = await fetch(AI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "user",
        content: message,
        messages: messages,
      }),
    });

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const messageData = await response.json();
      res.status(201).json(messageData);
    } else {
      // If response is not JSON, assume it's plain text and send it as JSON
      const text = await response.text();
      res.status(200).json({ message: text });
    }
  } catch (error) {
    console.error("Error in postChat:", error);
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
