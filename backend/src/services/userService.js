import { pool } from "../db.js";

export async function findUserByEmail(email) {
  const conn = await pool.getConnection();
  const rows = await conn.query(
    "SELECT * FROM users WHERE email = ? AND ativo = 1",
    [email]
  );
  conn.release();
  return rows[0];
}
