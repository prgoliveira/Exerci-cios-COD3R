/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar
*/

const changeVetor = (vetorOne, vetorTwo) => {
    if(vetorOne.length!=vetorTwo.length){
        return console.log('Vetores de tamanhos diferentes')
    } else {
        for(let i=0; i<vetorOne.length; i++){
            [vetorOne[i], vetorTwo[i]] = [vetorTwo[i], vetorOne[i]] 
        }
        return console.log(vetorOne,vetorTwo)
    }
    
}
const vetor1 = [1, 2, 3, 4, 5, 6]
const vetor2 = [6, 5, 4, 3, 2, 1]
changeVetor(vetor1, vetor2)