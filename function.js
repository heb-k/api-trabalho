function chama(){
    fetch("https://api-js-fab0c-default-rtdb.firebaseio.com/clientes.json")
    .then(resp => resp.json())
    .then(obj => { 
        if (!obj || Object.keys(obj).length === 0) {
        alert("Banco vazio"); return}
        let conversao = Object.values(obj);
        pag(conversao);
    })
}

function pag(obj){
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let trhead = document.createElement("tr")
    let thcpf = document.createElement("th")
    thcpf.innerHTML = "CPF";
    let thnome = document.createElement("th");
    thnome.innerHTML = "Nome"
    trhead.appendChild(thcpf);
    trhead.appendChild(thnome);

    let thidade = document.createElement("th");
    thidade.innerHTML = "Idade"
    trhead.appendChild(thidade);

    let thacao = document.createElement("th");
    thacao.innerHTML = "Ações"
    trhead.appendChild(thacao);

    thead.appendChild(trhead);
    table.appendChild(thead)
    let tbody = document.createElement("tbody");
    

    obj.forEach((todo, index) => {
        let trbody = document.createElement("tr");
        let tdcpf = document.createElement("td");
        let tdnome = document.createElement("td");
        let tdidade = document.createElement("td");

        tdcpf.innerHTML = todo.cpf;
        tdnome.innerHTML = "<input type='text' id='inputnome"+todo.cpf+"' value='"+todo.nome+"'>";
        tdidade.innerHTML = "<input type='number' id='inputnumero"+todo.cpf+"' value='"+todo.idade+"'>";

        let tdButtons = document.createElement("td");
        tdButtons.classList.add("td-buttons");

        let btnedit = document.createElement("button");
        btnedit.innerHTML = "Editar";
        btnedit.classList.add("edit"); 
        btnedit.setAttribute("onclick", "atualiza("+todo.cpf+")");

        let btndelete = document.createElement("button");
        btndelete.innerHTML = "Deletar";
        btndelete.classList.add("delete"); 
        btndelete.setAttribute("onclick", "deletar("+todo.cpf+")");

        tdButtons.appendChild(btnedit);
        tdButtons.appendChild(btndelete);

  
        trbody.appendChild(tdcpf);
        trbody.appendChild(tdnome);
        trbody.appendChild(tdidade);
        trbody.appendChild(tdButtons);
        tbody.appendChild(trbody);
    })

    table.appendChild(tbody);
    document.body.appendChild(table);
}


function sumir() {
    botao = document.getElementById('btn1');
    botao.style.display = 'none';
}

function eventos(){
    document.querySelector("#btn1").addEventListener("click", () => {chama(); sumir();})
}
window.onload = eventos;

















