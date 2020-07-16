"use strict";
//Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces**
//dos dois elementos que somam o valor do **target**.
//Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução,
//e você não pode usar o mesmo elemento duas vezes..
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumNumberArray = void 0;
exports.sumNumberArray = (arr, target) => {
    let response = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] + arr[i] === target) {
            response = [0, i];
            response.sort();
            return response;
        }
        else {
            index++;
            for (let i = index; i < arr.length; i++) {
                if (arr[index] + arr[i] === target) {
                    response = [i, index];
                    response.sort();
                    return response;
                }
            }
        }
    }
    return response;
};
const arr = [4, 5, 10, 12, 21];
const target = 33;
console.log(exports.sumNumberArray(arr, target));
