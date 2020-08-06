/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo) */

let partidas = [25, 20, 13, 50, 60, 55, 30, 90, 10, 100]
let melhor = partidas[0] , pior = partidas[0], recorde = 0, piorPartida
const desempenho = (partida, indice) =>{
    if(partida > melhor){
        melhor = partida
        recorde++
        console.log(`Ótimo ${[indice+1]} jogo, sua pontuação foi ${partida}, você bateu seu recorde ${recorde} vezes`)    
    } else if(partida < pior){ 
        piorPartida = indice+1       
        console.log(`No ${[indice+1]} jogo você fez a menor pontuação atual, sua pontuação foi ${partida}`)    
    } else{
        console.log(`No ${[indice+1]} jogo você fez ${partida} pontos`)
    }
}
partidas.forEach(desempenho)
console.log([recorde, piorPartida])