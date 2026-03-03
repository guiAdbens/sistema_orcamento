/*import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

/*export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */ /*
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

      {/* Menu */ /*
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
}*/
/*
export default function Dashboard() {
  return (
    <div>
      <h1>Painel do Sistema</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/profiles">
          <button>Gerenciar Perfis</button>
        </Link>

        <Link to="/users">
          <button>Gerenciar Usuários</button>
        </Link>
      </div>
    </div>
  );
}
  */
import { useNavigate } from "react-router-dom";
import Sidebar from "../componets/Sidebar";
import { useAuth } from "../context/useAuth";

export default function Dashboard() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema.</p>
        <p>Usuário: {user?.nome || user?.email}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Sair
        </button>
      </div>
    </div>
  );
}