import { it, expect, beforeEach, afterEach } from "vitest";
process.env.DATABASE_URL = "postgres://localhost/quest_test";
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
//TEST FOR COMMANDS BY CATEGORY

// it("GET /api/commands/:categoryId returns an array of commands for a specific category", async () => {
//   const categoryId = 5;

//   await db.query(
//     "INSERT INTO commands (category_id, command_syntax, command_description) VALUES(?, 'npm run test', 'Runs the tests for the project')",
//     [categoryId]
//   );

//   const res = await request(app).get(`/api/commands/${categoryId}`);
//   expect(res.status).toBe(200);
//   expect(Array.isArray(res.body)).toBe(true);

//   // Add more specific assertions based on your expected response format
//   // For example, check if the first command in the array has the expected properties
//   if (res.body.length > 0) {
//     const [firstCommand] = res.body;
//     expect(firstCommand).toMatchObject({
//       category_id: categoryId,
//       command_syntax: "npm run test",
//       command_description: "Runs the tests for the project",
//     });
//   }
// });

// //   // Test for admin login
// //   test("POST /api/login returns a token for valid admin credentials", async () => {
// //     const res = await request(server)
// //       .post("/api/login")
// //       .send({ username: "admin", password: "admin_password" });
// //     test.is(res.status, 200);
// //     test.true(res.body.hasOwnProperty("token"));
// //   });

// //   // Log DATABASE_URL and PORT
// //   console.log("DATABASE URL:", DATABASE_URL);
// //   console.log("PORT:", PORT);
// // });
