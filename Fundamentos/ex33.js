/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInteiro = [1, 2, 3, 4], vetorDouble = [1.1, 2.2, 3.3, 4.4], vetorString = ['um', 'dois', 'três', 'quatro']

const concatVetor = (vetor1, vetor2, vetor3) =>{
    let vetorNumeros = vetor1.concat(vetor2)
    let vetorTotal = vetor3.concat(vetor1, vetor2)
    console.log(vetorNumeros)
    console.log(vetorTotal)
}

concatVetor(vetorInteiro, vetorDouble, vetorString)