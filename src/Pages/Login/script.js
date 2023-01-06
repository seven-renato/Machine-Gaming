var showEye = document.getElementById("showEye")
var password = document.getElementById("password")
var email = document.getElementById("email")
var btnsubmit = document.getElementById("btnsubmit")

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
                nome: item.nome,
                email: item.email,
                password: item.password
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
        window.location.href = "../Main/index.html"
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

