import { useState } from "react";
import { api } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(""); 
  const navigate = useNavigate()
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post("/login", {
        email,  
        senha
      });

    //console.log("Resposta do backend:", response.data);           // ← veja exatamente o que veio
    
    login(response.data.user || response.data);                   // ajuste conforme o formato real
    
    //console.log("login() chamado → user deve estar no context agora");

      //login(response.data.user)
      alert("Login realizado!");
      navigate("/", { replace: true})

    } catch (erro) {
      console.error(erro)
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