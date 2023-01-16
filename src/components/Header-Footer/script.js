nav = document.getElementById("nav")
footer = document.querySelector("section#footer")
nav.innerHTML = `
<nav>
    <div class="nav-container">
        <div class="logo">
            <div class="slide" id="slide1">                    
                <ul>
                    <li><a href="../Suporte/index.html">&nbsp;&nbsp;<i style="color: #00B031; font-size: 1.1rem;" class="fa-sharp fa-solid fa-headset"></i> Suporte Ao Cliente</a></li>
                </ul>
            </div>
            <div class="slide" id="slide2" ">                    
                <ul>
                    <li><a href="#" id="texto1-log" ></a></li>                    <li><a id="texto2-log" href=""></a></li>
                   
                </ul>
            </div>
            <button id="btn-logo" class="btn-logo" onclick="change1(true)" onmousedown="change2(false)">
                <i class="fa-sharp fa-solid fa-bars" style="color: white;font-size: 2.5rem;"></i>
            </button>                
            <a style="margin-top: 8px;" href="../Main/index.html"><img class="img-logo" src="../../../assets/MachineGaming.svg" alt="" style="padding-top: 6px;"></a>
        </div>
        <div class="search_wrap">
            <div class="search_box">
                <input type="text" id="pesquise-seu"  class="input" placeholder="Pesquise o seu produto...">
                <div class="btn btn_common" onclick="pesquisar()">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>

        <div class="carshop">
            <div style="margin-left:90px; color: white;" class="numero-itens">1</div>
            <i class="fa-sharp fa-solid fa-user" onclick="change2(true)" onmousedown="change1(false)" style="color: white; font-size: 2rem; cursor: pointer;"> </i>
            <a href="../Carrinho/index.html"><i class="fa-sharp fa-solid fa-cart-shopping" style="margin-left: 30px;color: white; font-size: 2rem;"></i></a>
        </div>
    </div>
</nav>
`
footer.innerHTML = `
<footer>
    <div class="container-footer">
        <div class="row-footer">                
            <div class="footer-col">
                <h4>Obter ajuda</h4>
                <ul>
                    <li><a href="../../Pages/Perguntas/index.html">FAQ</a></li>
                    <li><a href="../Reembolso/index.html">Política de Reembolso</a></li>
                    <li><a href="../../Pages/Perguntas/index.html">Opções De Pagamento</a></li>
                </ul>
            </div>                
            
            <div class="footer-col">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="../../Pages/QuemSomos/index.html"> Quem somos </a></li>
                </ul>
            </div>                              
            
            <div class="footer-col">                    
                <img class="img-logo" src="../../../assets/MachineGaming.svg" alt="">
                <div class="medias-socias">
                    <a href="https://facebook.com/"> <i class="fa fa-facebook"></i> </a>
                    <a href="https://instagram.com/"> <i class="fa fa-instagram"></i> </a>
                    <a href="https://twitter.com/"> <i class="fa fa-twitter"></i> </a>
                    <a href="https://in.linkedin.com/"> <i class="fa fa-linkedin"></i> </a>
                </div>
            </div>
            <h3 style="color: white;" class="copyright">
                <br>
                &copy; 2022 - 2023 MachineGaming
            </h3>                
        </div>
    </div>
</footer>
`

function change1(bool) {
    slide1 = document.getElementById("slide1")
    if (bool) {
        slide1.style.transform = "translateX(-20px)"             
    } else {
        slide1.style.transform = "translateX(-380px)"                               
    }
    
}
var texto1Log = document.getElementById("texto1-log")
var texto2Log = document.getElementById("texto2-log")
if (localStorage.getItem("token") == null){
    texto1Log.innerHTML = '<i class="fa-sharp fa-solid fa-user" style="color: #00B031; font-size: 1.8rem; cursor: pointer;"> </i> LOGIN'
    texto1Log.href= "../Login/index.html"
    texto2Log.innerHTML = '<i class="fa fa-sign-in" aria-hidden="true" style="color: #00B031; font-size: 1.8rem; cursor: pointer;"></i> REGISTRAR'
    texto2Log.href= "../Sign-Up/index.html"
} else {
    texto1Log.innerHTML = '<i class="fa-solid fa-user" style="color: #00B031; font-size: 1.8rem; cursor: pointer;"></i> &nbsp;<a href="../Perfil/index.html?">PERFIL </a>'
    texto2Log.innerHTML = '<i onclick="sair()" class="fa fa-sign-out" aria-hidden="true" style="color: #00B031; font-size: 1.8rem; cursor: pointer;""></i><span onclick="sair()">&nbsp; SAIR </span>'
}


function change2(bool) {
    slide2 = document.getElementById("slide2")
    if (window.innerWidth > 1600) {
        if (bool) {
            slide2.style.transform = "translateX(1690px)"             
        } else {
            slide2.style.transform = "translateX(1980px)"                               
        }
    } else {
        if (bool) {
            slide2.style.transform = "translateX(1130px)"             
        } else {
            slide2.style.transform = "translateX(1480px)"                               
        }

    }

    
}


function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    localStorage.removeItem("Pedidos")
    window.location.href = "../Login/index.html"
}

let carrinho = JSON.parse(localStorage.getItem("Carrinho")||"[]")
numerodeitens = document.querySelector(".numero-itens")
numerodeitens.innerText = carrinho.length

function pesquisar() {
    let pesquise = document.getElementById("pesquise-seu").value
    window.location.href = `../Search/index.html?${pesquise}`
}