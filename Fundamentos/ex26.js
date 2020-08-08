// Fazer um programa para encontrar todos os pares entre 1 e 100


const par = () =>{
    let pares =[]
    let numero = 1
    while(numero<=100){
        if(numero%2===0){
            pares.push(numero)
        }
        numero++
    }
    console.log(pares)
}

par()