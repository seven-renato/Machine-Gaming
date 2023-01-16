let name = document.getElementById("name")
let labelName = document.getElementById("labelName")
let validName = false

let lastName = document.getElementById("lastName")
let labelLastName = document.getElementById("labelLastName")
let validLastName = false

let birth = document.getElementById("birth")
let labelBirth = document.getElementById("labelBirth")
let validBirth = false

let cel = document.getElementById("cel")
let labelCel = document.getElementById("labelCel")
let validCel = false


let cpf = document.getElementById("cpf")
let labelCpf = document.getElementById("labelCpf")
let validCpf = false

let email = document.getElementById('email')
let labelEmail = document.getElementById("labelEmail")
let validEmail = false


let emailConf = document.getElementById('email_confirmation')
let labelConfirmEmail = document.getElementById("labelConfirmEmail")
let validEmailConf = false


let password = document.getElementById("password")
let labelPass = document.getElementById("labelPass")
let validPass = false


let passconfirmation = document.getElementById("passconfirmation")
let labelPassConfirmation = document.getElementById("labelPassConfirmation")
let validPassConfirmation = false


let msgError = document.getElementById("msgError")
let msgSuccess = document.getElementById("msgSuccess")


//CPF
cpf.addEventListener("keypress", () => {
    let cpfLength = cpf.value.length

    if (cpfLength === 3 || cpfLength === 7 ){
        cpf.value += "."
    } else if (cpfLength === 11) {
        cpf.value += "-"
    }
})

cpf.addEventListener("keyup", () => {
    if (cpf.value.length == 0)  {
        labelCpf.setAttribute("style","color: white;")
        labelCpf.innerHTML = "CPF"
        validCpf = false
    }else if (cpf.value.length <= 13) {
        labelCpf.setAttribute("style","color: red;")
        labelCpf.innerHTML = ("<strong><small>CPF INCORRETO</small></strong>")
        validCpf = false
    } else {
        labelCpf.setAttribute("style","color: green;")
        labelCpf.innerHTML = "CPF"
        validCpf= true
    }
})

// BIRTH
birth.addEventListener("keypress", () => {
    let birthLength = birth.value.length

    if (birthLength === 2 || birthLength === 5 ){
        birth.value += "/"
    }
})

birth.addEventListener("keyup", () => {
    if (birth.value.length == 0)  {
        labelBirth.setAttribute("style","color: white;")
        labelBirth.innerHTML = "Data"
        validBirth = false
    }else if (birth.value.length < 9) {
        labelBirth.setAttribute("style","color: red;")
        labelBirth.innerHTML = ("<strong><small>DATA INCORRETA</small></strong>")
        validBirth = false    
    } else {
        labelBirth.setAttribute("style","color: green;")
        labelBirth.innerHTML = "Data de nascimento"
        validBirth = true
    }
})



// Celular

cel.addEventListener("keypress", () => {
    let celLength = cel.value.length

    if (celLength === 5 || celLength === 8){
        cel.value += "-"
    }
})

cel.addEventListener("keyup", () => {
    if (cel.value.length == 0)  {
        labelCel.setAttribute("style","color: white;")
        labelCel.innerHTML = "Nome"
        validCel = false
    }else if (cel.value.length <= 17) {
        labelCel.setAttribute("style","color: red;")
        labelCel.innerHTML = ("<strong><small>Celular Incorreto</small></strong>")
        validCel = false    
    } else {
        labelCel.setAttribute("style","color: green;")
        labelCel.innerHTML = "Celular"
        validCel = true
    }
})



name.addEventListener("keyup", () => {
    if (name.value.length == 0)  {
        labelName.setAttribute("style","color: white;")
        labelName.innerHTML = "Nome"
        validName = false
    }else if (name.value.length <= 2) {
        labelName.setAttribute("style","color: red;")
        labelName.innerHTML = ("<strong><small style='margin-left: 25px;'>Insira no mínimo 3 caracteres</small></strong>")
        validName = false    
    } else {
        labelName.setAttribute("style","color: green;")
        labelName.innerHTML = "<span style='margin-left: 20px;'> Nome </span>"
        validName = true
    }
})

lastName.addEventListener("keyup", () => {
    if (lastName.value.length == 0)  {
        labelLastName.setAttribute("style","color: white;")
        labelLastName.innerHTML = "Sobrenome"
        validLastName = false
    }else if (lastName.value.length <= 2) {
        labelLastName.setAttribute("style","color: red;")
        labelLastName.innerHTML = ("<small>Insira no mínimo 3 caracteres</small>")
        validLastName = false
    
    } else {
        labelLastName.setAttribute("style","color: green;")
        labelLastName.innerHTML = ("Sobrenome")
        validLastName = true

    }
})

emailConf.addEventListener("keyup", () => {
    if (emailConf.value.length == 0)  {
        labelConfirmEmail.setAttribute("style","color: white;")
        labelConfirmEmail.innerHTML = "Confirmação"
        validEmailConf = false
    }else if (emailConf.value !== email.value) {
        labelConfirmEmail.setAttribute("style","color: red;")
        labelConfirmEmail.innerHTML = "Digite igualmente o e-mail"
        validEmailConf = false

    }else if (emailConf.value.length <= 5 ) {
        labelConfirmEmail.setAttribute("style","color: red;")
        validEmailConf = false
        
        // labelName.innerHTML = ("<strong>Nome * Insira no mínimo 3 caracteres</strong>")
    } else {
        labelConfirmEmail.setAttribute("style","color: green;")
        
        validEmailConf = true
        labelConfirmEmail.innerHTML = "Confirmação"
    }
})

email.addEventListener("keyup", () => {
    if (email.value.length == 0)  {
        labelEmail.setAttribute("style","color: white;")
        labelEmail.innerHTML = "Email"
        validEmail = false
    }else if (email.value.length <= 5) {
        labelEmail.setAttribute("style","color: red;")
        validEmail = false        
        labelEmail.innerHTML = ("<small> Insira um email válido</small>")
    } else if (email.value.includes("@") && email.value.includes(".com")) {
        labelEmail.setAttribute("style","color: green;")
        labelEmail.innerHTML = ("Email")
        validEmail = true

    } else {
        labelEmail.setAttribute("style","color: red;")
        validEmail = false        
        labelEmail.innerHTML = ("<small> Insira um email válido</small>")
    }
})



password.addEventListener("keyup", () => {
    if (password.value.length == 0)  {
        labelPass.setAttribute("style","color: white;")
        labelPass.innerHTML = "Digite uma senha"
        validPass = false

    }else if (password.value.length <= 5) {
        labelPass.setAttribute("style","color: red;")
        labelPass.innerHTML = "<small style='width: 400px; '>Digite uma senha de no min. 6 caracteres</small>"
        validPass = false
    
    } else {
        labelPass.setAttribute("style","color: green;")
        labelPass.innerHTML = "Digite uma senha"
        validPass = true
    
    }
})


passconfirmation.addEventListener("keyup", () => {
    if (passconfirmation.value.length == 0)  {
        labelPassConfirmation.setAttribute("style","color: white;")
        labelPassConfirmation.innerHTML = "Confirmação"
        validPassConfirmation = false
    }else if (passconfirmation.value !== password.value) {
        labelPassConfirmation.setAttribute("style","color: red;")
        labelPassConfirmation.innerHTML = "Digite igualmente as senhas"
        validPassConfirmation = false
    }else if (passconfirmation.value.length <= 5 ) {
        labelPassConfirmation.setAttribute("style","color: red;")
        validPassConfirmation = false
        // labelName.innerHTML = ("<strong>Nome * Insira no mínimo 3 caracteres</strong>")
    } else {
        labelPassConfirmation.setAttribute("style","color: green;")
        labelPassConfirmation.innerHTML = "Confirmação"
        validPassConfirmation = true
    }
})








const cadastrar = () => {
    if(validBirth && validCel && validCpf && validEmail && validEmailConf && validLastName && validName && validPass && validPassConfirmation ) {
        let listaUser = JSON.parse(localStorage.getItem("listaUser")||"[]")
        // ou adiciona ou criar um array vazil
        //array de objetos do usuário
        
        listaUser.push({
            nome: name.value,
            lastName: lastName.value,
            birth: birth.value,
            celular: cel.value,
            cpf: cpf.value,
            email: email.value,
            password: password.value
        })

        localStorage.setItem("listaUser",JSON.stringify(listaUser))

        msgSuccess.setAttribute("style","visibility: visible;")
        msgSuccess.innerHTML = "<strong> Cadastrando usuário </strong>"
        msgError.setAttribute("style","visibility: hidden;")
        msgError.innerHTML = ""
        window.location.href = "../Login/index.html"
        
    } else {
        
        
        msgError.setAttribute("style","visibility: visible;")
        msgError.innerHTML = "<strong> Preencha todos os campos corretamente! </strong>"
        msgSuccess.setAttribute("style","visibility: hidden;")
        msgSuccess.innerHTML = ""
    }
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }