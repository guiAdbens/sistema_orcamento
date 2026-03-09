import pool from "../config/db.js";

export const login = async (req, res) => {

  const { email, senha } = req.body;

  try {

    const conn = await pool.getConnection();

    const rows = await conn.query(
      "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
      [email, senha]
    );

    conn.release();

    if (rows.length === 0) {
      return res.status(401).json({ erro: "Usuário ou senha inválidos" });
    }

    const usuario = rows[0];

    res.json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    });

  } catch (erro) {

    res.status(500).json({ erro: "Erro no servidor" });

  }

};