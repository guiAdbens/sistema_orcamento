import { pool } from "../config/db.js"


export async function listProfile(req, res) {
    try{
        const [rows] = await pool.query("SELECT * FROM profile ORDER BY nome");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({erro:"Erro ao listar profile"});
    }
}

// create
export async function createProfile(req,res) {
    try {
        const { nome, descricao} = req.body;
        
        await pool.query(
            "INSERT INTO profile (nome, descricao) values (?,?)",
            [nome,descricao]
        );

        res.json({ mensagem: "Perfil criado com sucesso"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao criar perfil"});
    }
}

// Update
export async function updateProfile(req, res) {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        await pool.query (
            "UPDATE profile SET nome = ?, descricao = ? WHERE id =?",
            [nome, descricao, id]
        );

        res.json({ mensagem: "Perfil atualizado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao atualizar perfil"});
    }
}

// Delete
export async function deleteProfile(req, res) {
    try {
        const { id } = req.params;

        await pool.query("DELETE FROM profiles WHERE id = ?", [id]);
        
        res.json({ mensagem: "Perfil deletado"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao deletar perfil"});
    }    
}