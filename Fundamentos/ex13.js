/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */
const semana =(dia) => {
    switch(dia) {

        case 1:
            console.log('Hoje é domingo, não é um dia útil')
            break

        case 2:
            console.log('Hoje é segunda, é um dia útil')
            break

        case 3:
            console.log('Hoje é terça, é um dia útil')
            break

        case 4:
            console.log('Hoje é quarta, é um dia útil')
            break
            
        case 5:
            console.log('Hoje é quinta, é um dia útil')
            break

        case 6:
            console.log('Hoje é sexta, é um dia útil')
            break

        case 7:
            console.log('Hoje é sabado, não é um dia útil')
            break

        default:
            console.log('Dia invalido')
    }
 }

 semana(1)
 semana(2)
 semana(3)
 semana(4)
 semana(5)
 semana(6)
 semana(7)