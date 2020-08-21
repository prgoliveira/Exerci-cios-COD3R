/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

const gradeAvaliation = (nota) => {
    if(nota>=0 && nota<=4.9) return console.log('Nota conceito D')
    else if (nota>=5 && nota<=6.9) return console.log('Nota conceito C')
    else if (nota>=7 && nota<=8.9) return console.log('Nota conceito B')
    else if (nota>=9 && nota<=10) return console.log('Nota conceito A')
    else return console.log('Nota invalida')
}

gradeAvaliation(4.9)
gradeAvaliation(9)
gradeAvaliation(19)