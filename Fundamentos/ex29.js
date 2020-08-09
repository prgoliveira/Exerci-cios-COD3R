/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. 
*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 21, 23, 25]
const intervaloVetor = (numero) =>{
    let dentro = 0, fora = 0
    for(let i=0; i<numero.length; i++){
        if(numero[i]>=10 && numero[i]<=20)
            dentro ++
        else
            fora ++
    }    
    console.log(`Tem ${dentro} numeros entre 10 e 20 dentro do intervalo e ${fora} numeros fora`)   
}

console.log(numeros)
intervaloVetor(numeros)