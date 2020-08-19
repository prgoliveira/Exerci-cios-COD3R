/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

const arithmeticProgression = (numero, primeiroTermo, razao) =>{
    let pa = [primeiroTermo]
    let progression = primeiroTermo
    let somaPa = primeiroTermo
    for(let i=1; i<numero; i++){
        progression += razao
        pa.push(progression)
        somaPa += progression
    }
    pa.push(`A soma de todos elementos é ${somaPa}`)
    console.log(pa)
}

const geometricProgression = (numero, primeiroTermo, razao) =>{
    let pg = [primeiroTermo]
    let progression = primeiroTermo
    let somaPg = primeiroTermo
    for(let i=1; i<numero; i++){
        progression *= razao
        pg.push(progression)
        somaPg += progression
    }
    pg.push(`A soma de todos elementos é ${somaPg}`)
    console.log(pg) 
}


arithmeticProgression(5, 2, 2)
geometricProgression(5, 2, 2)