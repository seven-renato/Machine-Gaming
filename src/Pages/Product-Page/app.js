import jogos from "../../../games.json" assert {type: 'json'}
let nomeDoJogo = window.location.search.slice(1,4)

jogos.forEach(item => {
    if (item.token == nomeDoJogo){
        game = item
    }
})

