import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCV8Du881f8er0o06xe-cOaE8e_VKPYSTo",
    authDomain: "api-js-fab0c.firebaseapp.com",
    databaseURL: "https://api-js-fab0c-default-rtdb.firebaseio.com",
    projectId: "api-js-fab0c",
    storageBucket: "api-js-fab0c.firebasestorage.app",
    messagingSenderId: "481895666172",
    appId: "1:481895666172:web:b483ce44891c2cbd9f6279"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, update, remove} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const db = getDatabase();


function criar(){
    let inputnome = document.getElementById('inputnome');
    let inputnumero = document.getElementById('inputnumero');
    let inputcpf = document.getElementById('inputcpf');
    if(inputnome.value==""|| inputnumero.value==""|| inputcpf.value==""){
        alert("Insira os dados do cliente")
        return
    }
    set(ref (db, 'clientes/'+ inputcpf.value ), {
        nome: inputnome.value,
        idade: Number(inputnumero.value),
        cpf: Number(inputcpf.value)
    })
    .then(()=>{
    alert("Cliente adicionado");
    window.location.reload(true);
    })
    .catch((error)=>{
    alert("Erro");
    console.log(error);
    })
}
btncreate.addEventListener("click", criar);

export function deletar(id){
    remove(ref (db, 'clientes/' + id))
    .then(()=>{
    alert("Dados deletados");
    window.location.reload(true);
    })
    .catch((error) => {
    alert("Erro");
    console.log(error);
    })
    }
    window.deletar = deletar;


export function atualiza(id){
    let inputnome = document.getElementById('inputnome'+id);
    let inputnumero = document.getElementById('inputnumero'+id);
    if(inputnome.value==""|| inputnumero.value==""){
        alert("Essa operação não é permitida")
        return
    }
    update(ref(db, 'clientes/' + id), {
        nome: inputnome.value, 
        idade: inputnumero.value,
    })
    .then(()=>{
        alert("Dados atualizados");
        window.location.reload(true);   

    })
    .catch((error) => {
        alert("Erro"); console.log(error);
    })
}
    window.atualiza=atualiza;
