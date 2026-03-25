import { useState, useMemo } from "react";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children }) {

  // Inicializa o user  direto localStorage (roda só uma vez)
  const [user, setUser] = useState(() =>{
    const storedUser = localStorage.getItem("user");

    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Erro ao parsear usuário do localStorage", error);
      return null;
    }
  });

  const [isLoading] = useState(false);

  
  function login(userData) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }


  // Memo para evitar re-render desnessários
  const value = useMemo(() => ({
    user,
    login,
    logout,
    isLoading
  }), [user, isLoading]);

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}