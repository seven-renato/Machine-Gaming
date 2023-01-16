var showEye = document.getElementById("showEye")
var password = document.getElementById("password")
var email = document.getElementById("email")
var btnsubmit = document.getElementById("btnsubmit")

if (window.location.search.slice(1) == "naologado"){
    localStorage.setItem("mudarParaCarrinho",true)
}
if(window.location.search.slice(1) == "naologadocomentario") {
    var deuErro = document.getElementById("casoDeErro")
    deuErro.innerHTML = "Você precisa estar logado para enviar um comentário!"
}

btnsubmit.addEventListener("click", () => {
    window.location.href = "../Forget-Password/index.html"
})

var bool = true
const showPass = () => {
    if (bool) {
        password.type = "text"
        bool = !bool
        showEye.className = "fa-regular fa-eye icon"
    } else {
        password.type = "password"
        bool = !bool
        showEye.className = "fa fa-eye-slash"
    }
}
/*
email.addEventListener('focus', (event) => {
    event.target.style.outline = 'pink 1px solid';
});
*/
const entrar = () => {
    let msgError = document.querySelector("#msgError")
    let listaUser = []
    // Desestruturação do array

    let userValid = {
        nome: "",
        email: "",
        password: ""
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach(item => { // Varendo a lista de user para validar
        if(email.value == item.email && password.value == item.password){            
            userValid = {
                nome: `${item.nome} ${item.lastName}`,
                email: item.email,
                password: item.password,
                nascimento: item.birth,
                cpf: item.cpf,
                celular: item.celular
            }
        }
    });
    if (email.value == userValid.email && password.value == userValid.password && email.value != "" && password.value != "") {
        email.style.outline = "green 1px solid"
        password.style.outline = "green 1px solid"
        console.log(userValid)
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)// String hexadecimal 16 caracteres
        localStorage.setItem("token",token)
        localStorage.setItem("userLogado",JSON.stringify(userValid))
        alert("Logado!")
        if (localStorage.getItem("mudarParaCarrinho") == null)
            window.location.href = "../Main/index.html"
        else {
            window.location.href = "../Carrinho/index.html"
            localStorage.removeItem("mudarParaCarrinho")
        }
    } else {
        msgError.style.visibility = "visible"
        msgError.innerHTML = "Usuário e/ou senha incorretos"
        email.style.outline = "red 1px solid"
        password.style.outline = "red 1px solid"
        email.focus()
    }
} 

const cadastrar = () => {
    window.location.href = "../Sign-Up/index.html"
}
