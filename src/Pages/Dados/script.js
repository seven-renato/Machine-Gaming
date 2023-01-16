var nameTeste = document.getElementById("nameDoUsuario")
var cpf = document.getElementById("cpf")
var celular = document.getElementById("celular")
var birth = document.getElementById("birth")
var email = document.getElementById("email")
let dados = JSON.parse(localStorage.getItem("userLogado")||"[]")
if (localStorage.getItem("token") == null) {
    window.location.href = `../Main/index.html`
} else {
    nameTeste.value = dados.nome
    cpf.value = dados.cpf
    celular.value = dados.celular
    birth.value = dados.nascimento
    email.value = dados.email
}

const alterarDados = () => {
    dados.nome = nameTeste.value
    dados.cpf = cpf.value
    dados.celular = celular.value
    dados.nascimento = birth.value
    dados.email = email.value
    localStorage.setItem("userLogado", JSON.stringify(dados))
    document.location.reload(true)
}