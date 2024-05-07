const express  = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'express',
  password: 'password',
  port: 5432,
});

app.get('/api', (req, res) => {
    res.json({ users: ['user1', 'user2', 'cool user '] });
});

app.get('/api/users', async (req, res) => {
    const client = await pool.connect();
    try {
      await client.query("SET SCHEMA 'express';");
      const result = await client.query('SELECT * FROM app_user;');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    } finally {
      client.release();
    }
  });

app.listen(5001, () => {
    console.log('Server is running on port 5000');
});