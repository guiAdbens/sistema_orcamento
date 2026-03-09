import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          senha
        })
      });

      const data = await response.json();

      if (response.ok) {

        alert("Login realizado!");
        console.log(data);

      } else {

        alert(data.erro);

      }

    } catch (erro) {

      alert("Erro ao conectar com o servidor");

    }
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <br />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>
  );
}

export default Login;