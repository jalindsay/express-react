const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
const ORM = require("./orm");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "express",
  password: "password",
  port: 5432,
});

app.get("/api/users", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("SET SCHEMA 'express';");
    const result = await client.query("SELECT * FROM app_user;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  } finally {
    client.release();
  }
});

app.post("/api/create-user", async (req, res) => {
  const client = await pool.connect();
  const orm = new ORM(pool);

  try {
    await orm.connect();
    const { username, email, password } = req.body;
    const user = await orm.createUserDynamic({ username, email, password });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  } finally {
    orm.disconnect();
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
