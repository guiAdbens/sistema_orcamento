import { useParams } from "react-router-dom";
import Sidebar from "../componets/Sidebar";

export default function Users() {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Usuários</h1>
        <p>ID recebido: {id}</p>
      </div>
    </div>
  );
}