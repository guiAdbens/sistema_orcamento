import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Sistema</h2>

            <button onClick={() => navigate("/")}>
                DashBoard
            </button>

            <button onClick={() => navigate("/usuarioas/0")}>
                Gerenciar Usuários
            </button>

            <button onClick={() => navigate("/perfis/0")}>
                Gerenciar Perfis
            </button>
        </div>
    )
}