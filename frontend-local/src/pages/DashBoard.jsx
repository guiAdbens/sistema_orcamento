import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white shadow p-4 flex justify-between">
        <div>
          <h1 className="font-bold">Sistema de Orçamentos</h1>
          <p className="text-sm text-gray-500">
            Bem-vindo, {user?.nome}
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Sair
        </button>
      </div>

      {/* Menu */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Menu</h2>

        <div className="grid grid-cols-2 gap-4">

          <button  className="bg-blue-600 text-white p-4 rounded">
            Gerenciar Usuários
          </button>
          <link to="/perfis"></link>
          <button to="/profile" className="bg-green-600 text-white p-4 rounded">
            Gerenciar Perfis
          </button>

        </div>
      </div>
    </div>
  );
}