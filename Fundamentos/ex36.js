/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const multVetor = (vetor, fator) =>{
    let produtos = []
    for(let i=0; i<vetor.length; i++){
        produtos.push(vetor[i]*fator)
    }
    console.log(produtos)
}

const multVetor2 = (vetor, fator) =>{
    let produtos = []
    for(let i=0; i<vetor.length; i++){
        if((vetor[i]*fator)>5)
            produtos.push(vetor[i]*fator)
    }
    console.log(produtos)
}

multVetor(inteiros, 2)
multVetor2(inteiros, 2)