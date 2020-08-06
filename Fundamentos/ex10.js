//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false
const divisivelPorTres  = (numero) => {
    let modulo = Number.parseInt(numero)
    modulo = modulo%3
    if(modulo===0)
        return true
    else 
        return false    
}

console.log(divisivelPorTres(9))
console.log(divisivelPorTres(4))
console.log(divisivelPorTres(5))
console.log(divisivelPorTres(5.15))
console.log(divisivelPorTres(6))
console.log(divisivelPorTres(6.84))
console.log(divisivelPorTres(6.14))
console.log(divisivelPorTres(12))