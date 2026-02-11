import { pool } from "../db.js";

export async function findUserByEmail(email) {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query(
      "SELECT * FROM users WHERE email = ? AND ativo = 1",
      [email]
    );

    return rows[0];
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  } finally {
    if (conn) conn.release(); // 🔥 GARANTE liberação mesmo com erro
  }
}
