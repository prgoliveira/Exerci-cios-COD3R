//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 21, 23, 25]
let par = 0, impar = 0, pares = [], impares = []
for(let i=0; i<=numeros.length; i++){
    if(numeros[i]%2===0){
        par ++
        pares.push(numeros[i])
    } else {
        impar ++
        impares.push(numeros[i])
    }
}    
console.log(`O vetor tem ${par} numeros par e ${impar} numeros impar, sendo os pares ${pares} e os impares ${impares}`)    
