import bcrypt from "bcryptjs";
import { findUserByEmail, getUserRoles } from "../services/userService.js";

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Dados obrigatórios" });
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ message: "Usuário ou senha inválidos" });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);

  if (!senhaValida) {
    return res.status(401).json({ message: "Usuário ou senha inválidos" });
  }

  const roles = await getUserRoles(user.id);

  return res.json({
    success: true,
    user: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      roles
    }
  });
}