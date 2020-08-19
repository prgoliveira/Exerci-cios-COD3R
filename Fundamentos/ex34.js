/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

const firstString = 'abcdefg aabbh1'
const secondString = 'Abcdefg bh1'
const thirdString = 'abcdefgbh1 1l'

const stringCompare = (string1, string2) => {
    
    const stringOne = (string1.toLowerCase()).split('')
    const stringTwo = (string2.toLowerCase()).split('')

    const setOne = new Set(stringOne)
    const setTwo = new Set(stringTwo)

    function setCompare(set1, set2) {
        if (set1.size !== set2.size) return false
        //forOf percorre cada elemento do primeiro Set e verifica se aquele elemento esta presente no segundo Set
        for (var set of set1){
            if (!set2.has(set)) 
                return false;
        } 

        return true;
    }
    return console.log(setCompare(setOne, setTwo))
}

stringCompare(firstString, secondString)
stringCompare(firstString, thirdString)