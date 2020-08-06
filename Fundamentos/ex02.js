/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes. 
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

function triangulo (c1, c2, h) {
    if(c1===c2 && c2===h){
        console.log('É um triangulo Equilátero')
    } else if ((c1===c2 && c1!==h) || (c2===h && c2!==c1) || (h===c1 && h!==c2)){
        console.log('É um triangulo Isósceles')
    } else {
        console.log('É um triangulo Escaleno')
    }
}

console.log(triangulo(4, 4, 4))
console.log(triangulo(3, 4, 4))
console.log(triangulo(4, 3, 4))
console.log(triangulo(4, 4, 3))
console.log(triangulo(4, 5, 3))