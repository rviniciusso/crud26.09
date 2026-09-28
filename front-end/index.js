const btnCarregar = document.getElementById("btn-load");
const containerItens = document.getElementById("container-itens");
const formItem = document.getElementById("cadastrar");
const btnCadastrar = document.getElementById("btn-cad");


btnCarregar.addEventListener("click", async (event) => {
    event.preventDefault();
    const filter = document.getElementById("filter").value;
    let url = "http://localhost:3001/item";
    
    if (filter) {
        url += '/:' + encodeURIComponent(filter);
    };

    console.log(url);

    try {
        const response = await fetch(url);

        const todosChamados = await response.json();
        todosChamados.forEach(element => {
            containerItens.innerHTML = `
            <div class="item">
                <div id="item-chamado">
                    ${element.nome},
                    ${element.tipo},
                    ${element.marca},
                    ${element.problema},
                    ${element.status}
                </div>
            </div>`
        });
        

    } catch (error) {
        console.error("Erro:", error);
        containerItens.innerHTML = `<p style="color: red;">Erro ao carregar chamados.</p>`;
        alert('Erro ao carregar');
    }

});

btnCadastrar.addEventListener("click", async (event) =>{
    event.preventDefault();
    let url = "http://localhost:3001/item";
    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const marca = document.getElementById("marca").value;
    const problema = document.getElementById("problema").value;
    const status = document.getElementById("status").value;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'aplication/json'},
        body: JSON.stringify({nome: nome, tipo: categoria, marca: marca, problema: problema, status: status})
    })
    const resultado = await response.json();
    if (resultado.status == 201) {
        alert('Produto cadastrado com sucesso!');
    }else if (resultado.status == 400) {
        alert('campo ausente.');
    }else if (resultado.status == 409) {
        alert('Produto já existe.');
    }
});


