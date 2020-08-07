//Faça um algoritmo que calcule o fatorial de um número.
const fatorial = (numero) => {
    if(numero===0){
        soma = 1
        console.log(soma)
    } else {
        let soma = numero
        for (let i=numero-1; i>=1; i--){
            soma *= i
        }
        console.log(soma)
    }    
}

fatorial(10)
fatorial(0) // Fatorial de 0 é 1, algoritimo tratado para suprir o caso
fatorial(1) // Fatorial de 1 é 1, algoritimo tratado para suprir o caso