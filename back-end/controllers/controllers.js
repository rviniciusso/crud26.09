const {listarItem, buscarItem, cadastrarItem, atualizarItem, deletarItem} = require('../services/services.js');

async function listar(req, res) {
    try {
        const {data} = await listarItem();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function buscar(req, res) {
    try {
        const {id} = req.params;
        console.log(id);
        const {data, error} = await buscarItem(id);

        if (error || !data || data.length === 0) {
            return res.status(404).json({mensagem:'item não encontrado.'});
        }
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function cadastrar(req, res) {
    try{
        const {data, error} = await cadastrarItem(req.body);
        if (error) {
            console.error("Erro do Supabase:", error);
            return res.status(400).json({ error: error.message });
        }
        return res.status(201);
    }catch (error) {
        console.error("Erro no servidor",error);
        return res.status(500).json({ error: error.message});
    }
}

async function atualizar(req, res) {
    try {
        const {id} = req.params;
        const item = req.body;
        const {data, error} = await atualizarItem(id, item);

        if (error) {
            console.error("Erro do Supabase:", error);
            return res.status(400).json({ error: error.message });
        }
        return res.status(200).json(data);
    }catch (error) {
        console.error("Erro no servidor",error);
        return res.status(500).json({ error: error.message});
    }
}

async function deletar(req, res) {
    try {
        const {id} = req.params;
        const {data, error} = await deletarItem(id);

        if (error) {
            console.error("Erro do Supabase ao deletar:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json(data);
    }catch (error) {
        console.error("Erro interno no servidor:", error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar,
    deletar
};