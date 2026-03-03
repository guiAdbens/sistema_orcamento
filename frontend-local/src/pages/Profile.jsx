//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { api } from "../services/api";
import Sidebar from "../componets/Sidebar";

export default function Profiles() {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Perfis</h1>
        <p>ID recebido: {id}</p>
      </div>
    </div>
  );
}


/*export default function Profiles() {
  const [Profiles, setProfiles] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function loadProfiles() {
    try {
        const res = await api.get("/profiles");
        setProfiles(res.data);
    } catch (error) {
        console.error("Erro ao carregar perfis:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
        await loadProfiles();
    };

    fetchData();
  }, []);

  async function criar(e) {
    e.preventDefault();

    await api.post("/profiles", {
      nome,
      descricao,
    });

    setNome("");
    setDescricao("");
    loadProfiles();
  }

  async function deletar(id) {
    await api.delete(`/profiles/${id}`);
    loadProfiles();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Perfis</h1>

      <form onSubmit={criar} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="Nome do perfil"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Criar Perfil
        </button>
      </form>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Nome</th>
            <th className="p-2 text-left">Descrição</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {Profiles.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.nome}</td>
              <td className="p-2">{p.descricao}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => deletar(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/