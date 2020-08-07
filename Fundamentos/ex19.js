/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const comanda = (codigo, quantidade) =>{
    quantidade = Number.parseInt(quantidade) // tratado para caso seja passado um valor que não seja um valor inteiro 
    switch(codigo){
        case 100:
            console.log(`Você pediu ${quantidade} Cachorro Quente(R$ 3,00), totalizando R$ ${(3 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        case 200:
            console.log(`Você pediu ${quantidade} Hambúrguer Simples(R$ 4,00), totalizando R$ ${(4 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        case 300:
            console.log(`Você pediu ${quantidade} Cheeseburguer(R$ 5,50), totalizando R$ ${(5.5 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        case 400:
            console.log(`Você pediu ${quantidade} Bauru(R$ 7,00), totalizando R$ ${(7 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        case 500:
            console.log(`Você pediu ${quantidade} Refrigerante(R$ 3,50), totalizando R$ ${(3.5 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        case 600:
            console.log(`Você pediu ${quantidade} Suco(R$ 2,80), totalizando R$ ${(2.8 * quantidade).toFixed(2).replace(".", ",")}, boa refeição`)
            break
        default:
            console.log(`Item solicitado não se encontra em nosso cardapio`)
    }
}

comanda(100, 4)
comanda(100, 4.5)
comanda(200, 3)
comanda(300, 5)
comanda(400, 2)
comanda(500, 1)
comanda(600, 7)
comanda(700, 2)