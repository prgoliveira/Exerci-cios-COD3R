/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const plano = (idade) =>{
    let valor = 100
    let acrescimo = 0
    if(idade<10){
        acrescimo = -20
        console.log(`O valor a ser pago é ${valor+acrescimo}`)
    } else if(idade>=10 && idade<=30){
        acrescimo = -50
        console.log(`O valor a ser pago é ${valor+acrescimo}`)
    } else if(idade>30 && idade<=60){
        acrescimo = -5
        console.log(`O valor a ser pago é ${valor+acrescimo}`)
    } else {
        acrescimo = 30
        console.log(`O valor a ser pago é ${valor+acrescimo}`)
    }
}

plano(5)
plano(30)
plano(59)
plano(61)