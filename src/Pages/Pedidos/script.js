var jogos = ""
var res = document.querySelector(".principal")
console.log(res)
const gerarPedidos = () => {
    let pedidos = JSON.parse(localStorage.getItem("Pedidos")||"[]")
    if (pedidos.length == 0) {
        res.innerHTML = "<h1 style='color: white; height: 500px;'>Você ainda não possui nenhum pedido :(</h1>"
    }
    jogos.forEach(item => {
        console.log(item)
        pedidos.forEach(element=> {
            if (element.token == item.token){
                let div = document.createElement("div")
                div.setAttribute("class","primeira-linha")
                div.innerHTML = 
                `
                <div class="jogos">            
                
                    <div class="nomes">
                        <img src="${item.imagemPrincipal}">
                        <p>${item.nome}</p>
                    </div>
                    <div class="informação">
                        <p>ID do Pedido: ${element.numeroDoPedido}</p>
                        <p>Quantidade: ${element.quantidade}</p>                        
                        <p>Data do pedido: ${element.data}</p>
                        <p>Status Do Pedido: <font color="green">Pedido Concluido!</font> </p>
                    </div>
                </div>
                `
                res.appendChild(div)
            }
        })
    })
}
window.onload = function() {
    gerarPedidos();
}
   