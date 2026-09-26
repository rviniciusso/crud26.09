const supabase = require('../data/supabase.js');

function listarItem() {
    return supabase.from("estoque").select("*");
}

function buscarItem(id) {
    return supabase.from("estoque").select("*").eq("id", id);
}

function cadastrarItem(estoque) {
    return supabase.from("estoque").insert([estoque]).select();
}

function atualizarItem(id, estoque) {
    return supabase.from("estoque").update(chamado).eq("id", id).select();
}

function deletarItem(id) {
    return supabase.from("estoque").delete().eq("id", id);
}

module.exports = {
    listarItem,
    buscarItem,
    cadastrarItem,
    atualizarItem,
    deletarItem
}