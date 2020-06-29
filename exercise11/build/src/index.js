"use strict";
//Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele,
//remover um caractere dele ou substituir um caractere por outro.
//Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações.
//Escreva um método que determine se uma string é  'one edit' de outra.
const VerifyOneEdit = (firstString, secondString) => {
    let bigString = firstString;
    if (secondString > bigString) {
        bigString = secondString;
    }
    let smallString = secondString;
    if (firstString.length < secondString.length) {
        smallString = firstString;
    }
    if (smallString.length !== bigString.length &&
        smallString.length + 1 !== bigString.length) {
        return false;
    }
    const firstStringHash = {};
    const secondStringHash = {};
    for (let i = 0; i <= bigString.length; i++) {
        let charInFirstHash = firstStringHash[firstString[i]];
        if (!charInFirstHash && firstString[i]) {
            firstStringHash[firstString[i]] = 1;
        }
        else if (firstString[i]) {
            firstStringHash[firstString[i]]++;
        }
        let charInSecondHash = secondStringHash[secondString[i]];
        if (!charInSecondHash && secondString[i]) {
            secondStringHash[secondString[i]] = 1;
        }
        else if (secondString[i]) {
            secondStringHash[secondString[i]]++;
        }
    }
    let aux = 0;
    for (const key in firstStringHash) {
        if (secondStringHash[key] !== firstStringHash[key]) {
            aux++;
        }
        if (aux >= 2) {
            return false;
        }
    }
    return true;
};
console.log(VerifyOneEdit("banane", "banana"));
