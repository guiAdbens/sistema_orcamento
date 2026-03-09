import { useState } from "react";
import { api } from "../services/api.js";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post("/login", {
        email,
        senha
      });

      alert("Login realizado!");
      console.log(response.data);

    } catch (erro) {

      alert(erro.response?.data?.erro || "Erro ao conectar com o servidor");

    }
  };

  return (
    <form onSubmit={handleLogin}>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button>Entrar</button>

    </form>
  );
}

export default Login;