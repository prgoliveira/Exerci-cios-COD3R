/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
 */
function analiseAltura (nome, altura, crescimentoAnual ) {
    return {
        nome,
        altura,
        crescimentoAnual,
        taxaCrescimento(tempo){
            let taxa = 0
            taxa += crescimentoAnual*tempo
            return altura + taxa
        }
    }
}
crianca1 = analiseAltura('João', 120, 15)
crianca2 = analiseAltura('Jonas', 90, 20)

if(crianca1.altura < crianca2.altura){
    if(crianca1.crescimentoAnual > crianca2.crescimentoAnual){
        let tempo = 0
        while(crianca1.taxaCrescimento(tempo)< crianca2.taxaCrescimento(tempo)){
            console.log(`Ano ${tempo}, ${crianca1.nome} com altura ${crianca1.taxaCrescimento(tempo)} e ${crianca2.nome} com altura ${crianca2.taxaCrescimento(tempo)} `)
            tempo++
        }        
        console.log(`Ano ${tempo}, ${crianca1.nome} com altura ${crianca1.taxaCrescimento(tempo)} e ${crianca2.nome} com altura ${crianca2.taxaCrescimento(tempo)} `)
    }
} else if(crianca2.altura < crianca1.altura){
    if(crianca2.crescimentoAnual > crianca1.crescimentoAnual){
    let tempo = 0
    while(crianca2.taxaCrescimento(tempo)< crianca1.taxaCrescimento(tempo)){
        console.log(`Ano ${tempo}, ${crianca1.nome} com altura ${crianca1.taxaCrescimento(tempo)} e ${crianca2.nome} com altura ${crianca2.taxaCrescimento(tempo)} `)
        tempo++
    }        
    console.log(`Ano ${tempo}, ${crianca1.nome} com altura ${crianca1.taxaCrescimento(tempo)} e ${crianca2.nome} com altura ${crianca2.taxaCrescimento(tempo)} `)
    }
} 