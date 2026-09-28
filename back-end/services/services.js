const supabase = require('../data/supabase.js');

function listarItem() {
    return supabase.from("cadastros").select("*");
}

function buscarItem(id) {
    return supabase.from("cadastros").select("*").eq("id", id);
}

function cadastrarItem(cadastros) {
    return supabase.from("cadastros").insert([cadastros]).select();
}

function atualizarItem(id, cadastros) {
    return supabase.from("cadastros").update(cadastros).eq("id", id).select();
}

function deletarItem(id) {
    return supabase.from("cadastros").delete().eq("id", id);
}

module.exports = {
    listarItem,
    buscarItem,
    cadastrarItem,
    atualizarItem,
    deletarItem
}