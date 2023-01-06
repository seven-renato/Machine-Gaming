

import jogos from "../../../games.json" assert {type: 'json'}
console.log(jogos)
console.log(carrinho)


let total = 0
carrinho.forEach(element => {
    jogos.forEach(item => {
        if(element.token == item.token) {
            console.log(item.preco.replace(",",".").slice(2))
            total += parseFloat(item.preco.replace(",",".").slice(2))
        }
    })
});
let valorTotal = total
total = total.toFixed(2).replace(".",",")
var textoteste = document.getElementById("preco-total-semdisc")
textoteste.innerHTML = total
var textotestetotal = document.getElementById("total-preco")
textotestetotal.innerHTML = total

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
                          <i class="fa-sharp fa-solid fa-circle-minus"></i>
                        </div>
                        <div class="quantidade-produtos"> 1 </div>
                        <div class="circulo"> 
                          <i class="fa-sharp fa-solid fa-circle-plus"></i>
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
