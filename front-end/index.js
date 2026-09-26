const url = process.env.API_URL;

const btnCarregar = document.getElementById("btn-load");
const filter = document.getElementById("filter");
const containerItens = document.getElementById("container-itens");
const formItem = document.getElementById("cadastrar")

document.addEventListener("DOMContentLoaded", () => {
    carregarItens();
});

btnCarregar.addEventListener("click", carregarItens);

function obterDataHoje() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

async function carregarItens() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro ao buscar chamados.");
        
        todosChamados = await response.json();
        renderizarChamados(todosChamados);
    } catch (error) {
        console.error("Erro:", error);
        listaChamados.innerHTML = `<p style="color: red;">Erro ao carregar chamados.</p>`;
    }
}