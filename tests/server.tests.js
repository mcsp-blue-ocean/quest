import test from "ava";
import request from "supertest";
import { server } from "../server/server.js";
import dotenv from "dotenv";

dotenv.config();

// Test for fetching commands
test("GET /api/commands returns an array of commands", async (t) => {
  const res = await request(server).get("/api/commands");
  t.is(res.status, 200);
  t.true(Array.isArray(res.body));
});

// Test for fetching categories
test("GET /api/categories returns an array of categories", async (t) => {
  const res = await request(server).get("/api/categories");
  t.is(res.status, 200);
  t.true(Array.isArray(res.body));
});

// Test for fetching commands by category id
test("GET /api/commands/:id returns an array of commands for a specific category", async (t) => {
  const res = await request(server).get("/api/commands/1"); // Change the ID accordingly
  t.is(res.status, 200);
  t.true(Array.isArray(res.body));
});

// Test for admin login
test("POST /api/login returns a token for valid admin credentials", async (t) => {
  const res = await request(server)
    .post("/api/login")
    .send({ username: "admin", password: "admin_password" });
  t.is(res.status, 200);
  t.true(res.body.hasOwnProperty("token"));
});

test("POST /api/login returns an error for invalid admin credentials", async (t) => {
  const res = await request(server)
    .post("/api/login")
    .send({ username: "invalid", password: "invalid_password" });
  t.is(res.status, 401);
  t.true(res.body.hasOwnProperty("error"));
});
