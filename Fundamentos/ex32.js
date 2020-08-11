// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
let numeros = [1, 2, 3, 4, 5]

const calcularMedia = (numero) => {
    let media = 0
    for(let i=0; i<numero.length; i++){
        media += Number.parseInt(numero[i])
    } 
    media = media/numero.length
    console.log(`a media dos inteiros é ${media}`)   
}

calcularMedia(numeros)