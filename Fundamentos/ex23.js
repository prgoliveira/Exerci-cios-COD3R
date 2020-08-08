/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/
const aluno = (codigo, nota1, nota2, nota3) => {
    let media = 0
    if(nota1>nota2 && nota1>nota3){
        media = ((nota1*4)/10 + (nota2*3)/10 + (nota3*3)/10)
    } else if (nota2>nota1 && nota2>nota3){
        media = ((nota2*4)/10 + (nota1*3)/10 + (nota3*3)/10)
    } else {
        media = ((nota2*4)/10 + (nota1*3)/10 + (nota3*3)/10)
    }
    if(media>=5){
        console.log(`APROVADO, o aluno ${codigo} tirou as notas ${nota1}, ${nota2} e ${nota3}, obtendo a media de ${media} `)
    } else {
        console.log(`REPROVADO, o aluno ${codigo} tirou as notas ${nota1}, ${nota2} e ${nota3}, obtendo a media de ${media} `)
    }
}
aluno(200, 5, 6, 4)
aluno(300, 6, 5, 3)
aluno(400, 1, 2, 10)