
let mensagem = document.querySelector(".mensagem") ;
var submitBtn = document.querySelector("#submit-btn")

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}

var data = new Date();
var horas = data.getHours();
var minutos = data.getMinutes();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
const addPedidos = () => {
  let pedidos = JSON.parse(localStorage.getItem("Pedidos")||"[]")
  carrinho.forEach(element => {
      pedidos.push({
          token: element.token,
          quantidade: document.querySelector(`#oi${element.token}`).innerHTML,
          data: `${dataAtual} as ${horas}:${minutos}h`,
          numeroDoPedido: Math.random().toString(16).substr(2)         
      })
  })
  localStorage.setItem("Pedidos", JSON.stringify(pedidos))
  localStorage.removeItem("Carrinho")
  window.location.href = "../Pedidos/index.html"
}

submitBtn.onclick = () => {
  addPedidos()
}
