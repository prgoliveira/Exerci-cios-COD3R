/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

let numeros = [17, -2, 1, 4, -5, -6, 7, 8, 9, 10, 11, 12, 15, 22, 21, -23, 25, 30]

const contarNegativos = (numero) => {
    let negativos = 0
    for(let i=0; i<numero.length; i++){
        if(numero[i]<0)
            negativos++    
    }    
    console.log(`Tem ${negativos} numeros negativos no vetor`)   
}

contarNegativos(numeros)