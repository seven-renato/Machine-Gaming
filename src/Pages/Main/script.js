let balls = document.querySelector(".balls")
let quant = document.querySelectorAll(".slides-first-carousel .image")
let atual = 0
let imagem = document.getElementById("atual")
let next = document.getElementById("next")
let voltar = document.getElementById("voltar")

for(let i=0; i < quant.length; i++) {
    let div = document.createElement("div")
    div.id = i
    balls.appendChild(div)
}
document.getElementById("0").classList.add("imgAtual")

let pos = document.querySelectorAll(".balls div")

for (let i=0; i< pos.length; i++) {
    pos[i].addEventListener("click",()=>{
        atual = pos[i].id
        slide()
    })
}

voltar.addEventListener("click",()=>{
    atual--
    slide()
})
next.addEventListener("click",()=>{
    atual++
    slide()
})

const slide = () => {
    if (atual >= quant.length) {
        atual = 0
    } else if (atual < 0) {
        atual = quant.length-1
    }
    document.querySelector(".imgAtual").classList.remove("imgAtual")
    imagem.style.marginLeft = -850*atual+"px"
    document.getElementById(atual).classList.add("imgAtual")
}
slide()

document.querySelectorAll("img").forEach(imagem => {
    imagem.onclick = () => {
        window.location.href = `../Product-Page/index.html?${imagem.alt}`
    }
})

document.querySelectorAll(".card-details").forEach(teste => {
    teste.onclick = () => {
        window.location.href = `../Product-Page/index.html?${teste.id}`
    }
})

function viajar() {
    window.location.href = `../Search/index.html`
}

function verAteQual(valor) {
    window.location.href = `../Search/index.html?${valor}`
}

document.querySelectorAll(".plataformass").forEach(imagem => {
    imagem.onclick = () => {
        window.location.href = `../Search/index.html?${imagem.id}`
    }
})