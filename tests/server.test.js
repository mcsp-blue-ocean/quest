import { it, expect, beforeEach, afterEach } from "vitest";
//TESTS ARE PERFORMED ON A TEST DATABASE
process.env.DATABASE_URL = "postgres://localhost/quest_test";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { app, db } from "../server/server.js";
import request from "supertest";

afterEach(async () => {
  await db.query("DELETE FROM commands");
});

//
//
//TEST FOR COMMANDS
beforeEach(async () => {
  await db.query("DELETE FROM commands");
});

it("GET /api/commands", async () => {
  await db.query(
    "INSERT INTO categories (id, category, parent_category) VALUES (1, 'SQL', 'Databases')"
  );
  await db.query(
    "INSERT INTO commands (category_id, command_syntax, command_description) VALUES(1, 'npm run test', 'Runs the tests for the project')"
  );

  const { status, body } = await request(app).get("/api/commands");
  expect(status).toBe(200);

  expect(body).toBeInstanceOf(Array);
  expect(body).toHaveLength(1);
  const [firstTask] = body;
  expect(firstTask.id).toBeTypeOf("number");
  expect(firstTask).toEqual({
    category_id: 1,
    command_syntax: "npm run test",
    command_description: "Runs the tests for the project",
    id: firstTask.id,
  });
});

afterEach(async () => {
  await db.query("DELETE FROM categories");
});

//
//
// TEST FOR CATEGORIES
beforeEach(async () => {
  await db.query("DELETE FROM categories");
});

it("GET /api/categories", async () => {
  await db.query(
    "INSERT INTO categories (id, category, parent_category) VALUES(5, 'This is the subcategory', 'This is the parent category')"
  );

  const { status, body } = await request(app).get("/api/categories");
  expect(status).toBe(200);

  expect(body).toBeInstanceOf(Array);
  expect(body).toHaveLength(1);
  const [firstTask] = body;
  expect(firstTask.id).toBeTypeOf("number");
  expect(firstTask).toEqual({
    id: 5,
    category: "This is the subcategory",
    parent_category: "This is the parent category",
    id: firstTask.id,
  });
});

//
//
// TEST FOR COMMANDS BY CATEGORY
beforeEach(async () => {
  await db.query("DELETE FROM categories");
});

it("GET /api/commands/:categoryId", async () => {
  // Create a category
  await db.query(
    "INSERT INTO categories (id, category, parent_category) VALUES (3, 'TestCategory', 'ParentCategory')"
  );

  // Insert commands for the created category
  await db.query(
    "INSERT INTO commands (category_id, command_syntax, command_description) VALUES(3, 'npm run test', 'Runs the tests for the project')"
  );
  await db.query(
    "INSERT INTO commands (category_id, command_syntax, command_description) VALUES(3, 'npm run test two', 'Runs the tests for the project two')"
  );
  await db.query(
    "INSERT INTO commands (category_id, command_syntax, command_description) VALUES(3, 'npm run test three', 'Runs the tests for the project three')"
  );

  // Perform GET request for the specific category
  const { status, body } = await request(app).get("/api/commands/3");
  expect(status).toBe(200);

  expect(body).toBeInstanceOf(Array);
  expect(body).toHaveLength(3);

  const commandSyntaxes = body.map((command) => command.command_syntax);
  expect(commandSyntaxes).toContain("npm run test");
  expect(commandSyntaxes).toContain("npm run test two");
  expect(commandSyntaxes).toContain("npm run test three");

  // Clear data
  afterEach(async () => {
    await db.query("DELETE FROM commands");
    await db.query("DELETE FROM categories");
  });
});

//
//
// TEST FOR ADMIN LOGIN
beforeEach(async () => {
  await db.query("DELETE FROM admin_accounts");
});

it("POST /api/login returns a token for valid admin credentials", async () => {
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin_password";

  // Hash the password using bcrypt
  const HASHED_PASSWORD = await bcrypt.hash(ADMIN_PASSWORD, 10);

  // Insert admin credentials into your test database
  await db.query(
    "INSERT INTO admin_accounts (username, password_hash) VALUES($1, $2)",
    [ADMIN_USERNAME, HASHED_PASSWORD]
  );

  const res = await request(app)
    .post("/api/login")
    .send({ username: ADMIN_USERNAME, password: ADMIN_PASSWORD });
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty("token");
  const decoded = jwt.verify(res.body.token, process.env.SECRET_KEY);
  expect(decoded.username).toBe(ADMIN_USERNAME);

  // Clear the test data from the database
  await db.query("DELETE FROM admin_accounts");
});
