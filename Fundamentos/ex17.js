/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const aumento = (salario, plano) => {
    switch(plano){
        case 'A':
            console.log(`Parabéns, Você recebia R$ ${salario} e teve um aumento de 10%, totalizando R$ ${salario + (salario*0.1)} `)
            break
        case 'B':
            console.log(`Parabéns, Você recebia R$ ${salario} e teve um aumento de 15%, totalizando R$ ${salario + (salario*0.15)} `)
            break
        case 'C':
            console.log(`Parabéns, Você recebia R$ ${salario} e teve um aumento de 20%, totalizando R$ ${salario + (salario*0.2)} `)
            break
        default:
            console.log('Plano invalido')
    }
}

aumento(2000, 'B')
aumento(1200, 'C')
aumento(3000, 'A')