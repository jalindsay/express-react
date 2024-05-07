const bcrypt = require("bcrypt");

class ORM {
  constructor(pool) {
    this.pool = pool;
  }

  async connect() {
    this.client = await this.pool.connect();
    await this.client.query("SET SCHEMA 'express';");
  }

  async disconnect() {
    if (this.client) {
      this.client.release();
    }
  }

  async createUser(username, email, password) {
    const hash = bcrypt.hashSync(password, 10);
    const result = await this.client.query(
      "INSERT INTO app_user (username, email, password) VALUES ($1, $2, $3) RETURNING *;",
      [username, email, hash]
    );
    return result.rows[0];
  }
}

module.exports = ORM;
