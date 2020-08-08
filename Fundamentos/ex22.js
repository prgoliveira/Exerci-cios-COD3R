/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos).
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

const anuidade = (mes, valor) => {
    if(mes>1){
        for(let i=1; i<=mes; i++){
            valor += valor*0.05
        }
    }
    console.log(`O valor a ser pago é R$ ${valor.toFixed(2).replace(".", ",")}`)
}

anuidade(1, 100)
anuidade(2, 100)
anuidade(10, 100)