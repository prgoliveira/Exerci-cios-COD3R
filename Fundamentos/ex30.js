// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

let numeros = [17, 2, 1, 4, -5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 21, 23, 25, 30]

const percorrerVetor = (numero) => {
    let maior = numero[0], menor = numero[0]
    for(let i=0; i<numero.length; i++){
        if(numero[i]>=maior)
            maior = numero[i]
        else if(numero[i]<=menor)
            menor = numero[i]         
    }    
    console.log(`o maior numero dentro do vetor é ${maior} e o menor ${menor}`)   
}

percorrerVetor(numeros)