import dotenv from "dotenv";
import { createTest, html } from "vitest";
import request from "supertest";
import { server } from "../server/server.js";

dotenv.config({ path: "../.env" });

createTest("Server Tests", (test) => {
  // Test for commands
  test("GET /api/commands returns an array of commands", async () => {
    const res = await request(server).get("/api/commands");
    test.is(res.status, 200);
    test.true(Array.isArray(res.body));
  });

  // Test for categories
  test("GET /api/categories returns an array of categories", async () => {
    const res = await request(server).get("/api/categories");
    test.is(res.status, 200);
    test.true(Array.isArray(res.body));
  });

  // Test for commands by category
  test("GET /api/commands/:id returns an array of commands for a specific category", async () => {
    const res = await request(server).get("/api/commands/1");
    test.is(res.status, 200);
    test.true(Array.isArray(res.body));
  });

  // Test for admin login
  test("POST /api/login returns a token for valid admin credentials", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ username: "admin", password: "admin_password" });
    test.is(res.status, 200);
    test.true(res.body.hasOwnProperty("token"));
  });

  // Log DATABASE_URL and PORT
  console.log("DATABASE URL:", DATABASE_URL);
  console.log("PORT:", PORT);
});
