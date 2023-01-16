if (localStorage.getItem("token") == null) {
    window.location.href = `../Main/index.html`
}

document.querySelector("#myFileInput").addEventListener("change", function () {
    let inputImage= document.querySelector("input[type=file]")
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        localStorage.setItem("foto-de-perfil",reader.result)
    })
    reader.readAsDataURL(inputImage.files[0]);
    document.location.reload(true)
})

document.addEventListener("DOMContentLoaded", ()=> {
    const recentImageDataUrl = localStorage.getItem("foto-de-perfil")
    if (recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    } else {
        document.querySelector("#imgPreview").setAttribute("src", "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg")
    }
     
})

let dados = JSON.parse(localStorage.getItem("userLogado")||"[]")
var nome = document.querySelector("#nomeDoUsuario")
nome.innerHTML = dados.nome


function removerFoto() {
    localStorage.removeItem("foto-de-perfil")
    document.location.reload(true)
}
function meusPedidos() {
    window.location.href = `../Pedidos/index.html`
}
function meusDados() {
    window.location.href = `../Dados/index.html`
}
function mensagem() {
    window.location.href = `../Suporte/index.html`
}
function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    localStorage.removeItem("Pedidos")
    localStorage.removeItem("foto-de-perfil")
    window.location.href = "../Login/index.html"
}