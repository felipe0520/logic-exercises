"use strict";
//Escreva uma função que recebe um array não vazio de números.
//Todos os números do array aparecem 2 vezes, com excessão de um. Encontre (e retorne) esse número.
const verifyNumberDuplicad = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            stack.push(arr[i]);
        }
        else {
            let index = stack.findIndex((el) => {
                return el === arr[i];
            });
            stack.splice(index, 1);
        }
    }
    return stack;
};
const arr = [1, 2, 3, 4, 2, 1, 3];
console.log(verifyNumberDuplicad(arr));
