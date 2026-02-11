/*import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "roca$2009",
  database: "orcamento_sys_dev",
  connectionLimit: 5
});

try {
  const conn = await pool.getConnection();
  console.log("✅ Conectado com sucesso!");
  conn.release();
  process.exit(0);
} catch (err) {
  console.error("❌ Erro na conexão:");
  console.error(err);
  process.exit(1);
}
*/