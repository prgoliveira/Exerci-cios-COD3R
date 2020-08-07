/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação
(note que não foram exibidas informações sobre as demais cédulas): 
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/
const otimizarTroco = (dinheiro) =>{
    let troco = []
    let resto 
    while(dinheiro>0){
        if(dinheiro>=100){
            resto = dinheiro%100
            let cem = `${Number.parseInt(dinheiro/100)} nota(s) de R$ 100`
            dinheiro = resto
            troco.push(cem)
        } else if(dinheiro>=50){
            resto = dinheiro%50
            let cinquenta = `${Number.parseInt(dinheiro/50)} nota(s) de R$50`
            dinheiro = resto
            troco.push(cinquenta)
        } else if(dinheiro>=10){
            resto = dinheiro%10
            let dez = `${Number.parseInt(dinheiro/10)} nota(s) de R$ 10`
            dinheiro = resto
            troco.push(dez)
        } else if(dinheiro>=5){
            resto = dinheiro%5
            let cinco = `${Number.parseInt(dinheiro/5)} nota(s) de R$ 5`
            dinheiro = resto
            troco.push(cinco)
        } else {
            resto = resto%1
            let um = `${Number.parseInt(dinheiro/1)} nota(s) de R$ 1`
            dinheiro = 0
            troco.push(um)   
        }
    }
    console.log(troco)
}

otimizarTroco(18)
otimizarTroco(25)
otimizarTroco(43)
otimizarTroco(52)
otimizarTroco(100)