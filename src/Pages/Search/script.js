import products from "../../../games.json" assert {type: 'json'}
  for (let i of products) {
    //Create Card
    let desconto = ""
    let card = document.createElement("div");
    if (parseFloat(i.preco.replace(",",".").slice(2)) < 21) {
        desconto = "barato"
    }
    else if (parseFloat(i.preco.replace(",",".").slice(2)) < 41) {
        desconto = "medio"
    }
    else if (parseFloat(i.preco.replace(",",".").slice(2)) < 51) {
        desconto = "alto"
    }
    else if (parseFloat(i.preco.replace(",",".").slice(2)) > 100) {
        desconto = "caro"
    }   
    card.setAttribute("class",`card ${desconto}`)
    console.log(i.detalhes[0])
    card.innerHTML = 
    `                           
    <img src="${i.imagemPrincipal}" alt="">
    <div class="price-tag">
        <span class="green-border"></span>
        <h1>R$${i.preco}</h1>
    </div>
    <div class="card-details" id="${i.token}">
        <h3 class="product-name">${i.nome.toUpperCase()}</h3>
        <br>
        <span>Disponível em: ${i.gamemodes}</span>
        <span>Categorias: ${i.genero}</span>
    </div>
    `
    document.getElementById("products").appendChild(card)
  }
  //parameter passed from button (Parameter same as genero)
  
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