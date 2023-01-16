import jogos from "../../../games.json" assert {type: 'json'}
console.log(jogos)
console.log(carrinho)
export default carrinho



function calcTotal() {
    let total = 0
    carrinho.forEach(element => {
        jogos.forEach(item => {
            if(element.token == item.token) {
                var quantidadetotal = Number(document.querySelector(`#oi${element.token}`).innerText)
                console.log(item.preco.replace(",",".").slice(2))
                console.log(quantidadetotal)
                total += parseFloat(item.preco.replace(",",".").slice())*quantidadetotal
            }
        })
    });
    let valorTotal = total
    total = total.toFixed(2).replace(".",",")
    var textoteste = document.getElementById("preco-total-semdisc")
    textoteste.innerHTML = total
    var textotestetotal = document.getElementById("total-preco")
    textotestetotal.innerHTML = total
}

function criarCarrinho() {
    let cont = 0
    let res = document.getElementById("itensDoCarrinho")
    carrinho.forEach(element => {
        jogos.forEach(item => {
            if(element.token == item.token) {
                let div = document.createElement("div")
                div.setAttribute("class","primeira-linha")
                div.innerHTML = 
                `
                <img src="${item.imagemPrincipal}">
                <h3 align = "center"> ${item.nome}</h3>
                <div class="circulo">
                <i id="${item.token}" class="fa-sharp fa-solid fa-circle-minus botao-menos"></i>
                </div>
                <div id="oi${item.token}" class="quantidade-produtos"> 1 </div>
                <div class="circulo"> 
                <i id="${item.token}" class="fa-sharp fa-solid fa-circle-plus botao-mais"></i>
                </div>
                <div class="preco-produto"> ${item.preco} </div>
                <div id="delete" class="lixeira"> <i id="${cont}" style="cursor: pointer;" onmousedown="removerItem(${cont})" class="fa-solid fa-trash-can"></i> </div>
                `
                res.appendChild(div)
                cont++ 
            }
        })
    });
}



criarCarrinho()
calcTotal()

document.querySelectorAll(".botao-mais").forEach(element => {
    element.onclick = () => {
        var quantidade = Number(document.querySelector(`#oi${element.id}`).innerText)
        quantidade += 1
        document.querySelector(`#oi${element.id}`).innerText = quantidade
        calcTotal()
    }
})

document.querySelectorAll(".botao-menos").forEach(element => {
    element.onclick = () => {
        var quantidademenor = Number(document.querySelector(`#oi${element.id}`).innerText)
        if (quantidademenor > 1) {
            quantidademenor -= 1
            document.querySelector(`#oi${element.id}`).innerText = quantidademenor
        }
        calcTotal()
    }
})

const pagarButton = document.querySelector("#pagarModal")
const modal = document.querySelector("dialog")

pagarButton.onclick = () => {
    if (localStorage.getItem("token") == null){
        window.location.href = "../Login/index.html?naologadodevecomprar"
    } else {
        modal.showModal()
    }
}
