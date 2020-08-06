/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e 
a segunda retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capital, juros, tempo) => {
    let aplicacao = capital
    for(let i = 0; i< tempo; i++){
        aplicacao += capital * juros
    }
    console.log(`capital inicial R$ ${capital}, montante da aplicação R$ ${aplicacao.toFixed(2).replace(".", ",")}`)
}

const jurosComposto = (capital, juros, tempo) => {
    let aplicacao = capital
    for(let i = 0; i< tempo; i++){
        aplicacao += aplicacao * juros
    }
    console.log(`capital inicial R$ ${capital}, montante da aplicação R$ ${aplicacao.toFixed(2).replace(".", ",")}`)
}

jurosSimples(2000, 0.1, 12)
jurosComposto(2000, 0.1, 12)