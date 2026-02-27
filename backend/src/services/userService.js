import { pool } from "../config/db.js";

export async function findUserByEmail(email) {
  const conn = await pool.getConnection();

  try {
    const rows = await conn.query(
      `
      SELECT id, nome, email, senha, ativo
      FROM users
      WHERE email = ? AND ativo = 1
      LIMIT 1
      `,
      [email]
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
}

export async function getUserRoles(userId) {
  const conn = await pool.getConnection();
  
  try {
  const rows = await conn.query(
    `SELECT r.id, r.nome, r.nivel
     FROM roles r
     JOIN user_roles ur ON ur.role_id = r.id
     WHERE ur.user_id = ? AND r.ativo = 1`,
    [userId]
  );
  return rows;
  } finally {
  conn.release();
  }
}