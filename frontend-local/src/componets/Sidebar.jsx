import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Sistema</h2>

      <button
        style={styles.button}
        onClick={() => navigate("/")}
      >
        Dashboard
      </button>

      <button
        style={styles.button}
        onClick={() => navigate("/usuarios/0")}
      >
        Gerenciar Usuários
      </button>

      <button
        style={styles.button}
        onClick={() => navigate("/perfis/0")}
      >
        Gerenciar Perfis
      </button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#1e293b",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px",
    border: "none",
    background: "#334155",
    color: "white",
    cursor: "pointer",
  },
};