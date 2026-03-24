import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function Dashboard() {
    const { logout, user} = useAuth();
    const navigate = useNavigate();

    function handleLogout() {    
        logout();
        navigate("/login");
    }

    return (
        <div>
            <Sidebar />
            <div>
                <h1>Dashboard</h1>
                <p>{user?.nome || user?.email}</p>

                <button onClick={handleLogout}>
                    Sair
                </button>
            </div>
        </div>
    )
}