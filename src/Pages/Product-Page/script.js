
var game = {
    nome: "Pokemon Scarlet",
    preco: "R$299,90",
    descricao: "Os mais novos capítulos da série Pokémon™, os jogos Pokémon Scarlet e Pokémon Violet, estão chegando ao sistema Nintendo Switch™ ainda este ano. Como personagem principal, você pode explorar o mundo aberto de Pokémon Scarlet no seu próprio ritmo. Nesses jogos, você poderá desfrutar das aventuras icônicas da série Pokémon, como lutar contra Pokémon selvagens e tentar pegá-los! Escolha Sprigatito, o Pokémon Grass Cat, Fuecoco, o Pokémon Fire Croc ou Quaxly, o Pokémon Patinho para ser seu primeiro Pokémon parceiro antes de partir em sua jornada por esta nova região.",
    caracteristicas: ["Embarque em uma nova aventura Pokémon em um cenário de mundo aberto!",
    "Explore livremente através de uma nova região rica e expansiva!",
    "Descubra Pokémon em toda a região - nos céus, nos mares, nas florestas, nas ruas e muito mais!",
    "Visite várias vilas e cidades que se misturam perfeitamente com a natureza!",
    "Pegue, lute e troque Pokémon em uma nova aventura!"],
    detalhes: ["Plataforma: Nintendo Switch", "Lançamento: 20/01/2023", "Desenvolvedor: Gamefreak", "Distribuidor: Nintendo"],
    imagemPrincipal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oVu-oX6dv8Zav-zogEOzph1aIiYF9TEzsg&usqp=CAU",
    imagem2 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ltEQ_733Zdyvn5cBnBQNemHX1FbGubqxA&usqp=CAU",
    imagem3: "https://sm.ign.com/ign_br/screenshot/default/pokemon-scarlet-violet-1_7new.jpg",
    imagem4: "https://criticalhits.com.br/wp-content/uploads/2022/11/pokemon-scarlet-violet-professor-910x455.jpg",
    genero: "Aventura RPG Casual PvE PvP",
    gamemodes: "Single-player Multi-player.Local Multi-player.Online",
    idiomas: "Inglês Francês Japonês Italiano Alemão",
}


const funcionar = () => {

    let nome_jogo = document.getElementById('nome-jogo')
    nome_jogo.innerHTML = `${game.nome} <br/> R$${game.preco}`

    let genero = document.getElementById("genero")
    let generos = game.genero.split(" ")
    generos.forEach(element => {
        let p = document.createElement("p")
        p.innerHTML = element
        p.setAttribute("class","palavra")
        genero.appendChild(p)
    });

    let gamemode = document.getElementById("modo_de_jogo")
    let gamemodes = game.gamemodes.split(" ")
    gamemodes.forEach(item => {
        let p = document.createElement("p")
        p.innerHTML = item.split(".").join(" ")
        p.setAttribute("class","gamemode")
        gamemode.appendChild(p)
    });

    let idioma = document.getElementById("idioma")
    let idiomas = game.idiomas.split(" ")
    idiomas.forEach(item => {
        let p = document.createElement("p")
        p.innerHTML = item.split(".").join(" ")
        p.setAttribute("class","idiomas")
        idioma.appendChild(p)
    });

    let detalhe = document.getElementById("detalhes")
    let detalhes = game.detalhes
    detalhes.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        detalhe.appendChild(li)
    });

    let descricao = document.getElementById("descricao")
    descricao.innerHTML = game.descricao
    let carac = document.getElementById("caracteristicas")
    let caracs = game.caracteristicas
    caracs.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        carac.appendChild(li)
    })

    let image1 = document.getElementById("image1")
    image1.src = game.imagem2
    let image2 = document.getElementById("image2")
    image2.src = game.imagem3
    let image3 = document.getElementById("image3")
    image3.src = game.imagem4

    imagemPrincipal = document.getElementById("main-img")
    imagemPrincipal.src = game.imagemPrincipal

    image1.onclick = () => {
        let src = imagemPrincipal.src
        imagemPrincipal.src = image1.src
        image1.src = src
    }
    image2.onclick = () => {
        let src = imagemPrincipal.src
        imagemPrincipal.src = image2.src
        image2.src = src
    }
    image3.onclick = () => {
        let src = imagemPrincipal.src
        imagemPrincipal.src = image3.src
        image3.src = src
    }
    let comentarios = JSON.parse(localStorage.getItem("Comentarios")||"[]")
    let res = document.querySelector(".comentario")
    comentarios.forEach(item => {
        if(item.token == window.location.search.slice(1,4)) {
            let div = document.createElement("div")
            div.setAttribute("class","comentarios")
            div.innerHTML = 
            `
            <img src="${item.comentario.foto}" style="height: 100px; width: 100px;" alt="">
            <div>
            <p class="data" style="width: 200px; margin-left: 0px; font-size: 17px;">Feito em ${item.comentario.data}</p>
            <div class="nomes">
                <p class="nome">${item.comentario.nome}</p>                              
            </div>
            <p class="paragrafo">
                ${item.comentario.texto}
            </p>
            </div> 
            `
            res.appendChild(div)
        }
    })
}

let teste = false
const addCart = () => {
    let carrinho = JSON.parse(localStorage.getItem("Carrinho")||"[]")
    carrinho.forEach(item => {
        console.log(item.token)
        if (item.token == window.location.search.slice(1,4)) {
            teste = true
        }
    })
    if (teste == false) {
        carrinho.push({token: window.location.search.slice(1,4)})
        console.log(carrinho)
        localStorage.setItem("Carrinho", JSON.stringify(carrinho))
    }
    document.location.reload(true)
}

console.log(window.location.search.slice(1))
var teste2 = false
function falaroi () {
    if (localStorage.getItem("token")){ 
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        var dataAtual = dia + '/' + mes + '/' + ano;
        var recentImageDataUrl = localStorage.getItem("foto-de-perfil")
        if (recentImageDataUrl == null) {
            recentImageDataUrl = "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
        }
        let dados = JSON.parse(localStorage.getItem("userLogado")||"[]")
        let comentario = JSON.parse(localStorage.getItem("Comentarios")||"[]")
        comentario.push({token: window.location.search.slice(1,4),
            comentario: {
                nome: dados.nome,
                data: dataAtual,
                foto: recentImageDataUrl,
                texto: document.querySelector(".mensagem").value
            }
        
        })
        localStorage.setItem("Comentarios", JSON.stringify(comentario))
        document.location.reload(true)
        
    } else {
        window.location.href = "../Login/index.html?naologadocomentario"
    }
}