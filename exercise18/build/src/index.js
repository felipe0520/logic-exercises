"use strict";
//Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces**
//dos dois elementos que somam o valor do **target**.
//Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução,
//e você não pode usar o mesmo elemento duas vezes..
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumNumberArray = void 0;
exports.sumNumberArray = (arr, target) => {
    let response = [];
    for (let i = 0; i < arr.length; i++) {
        let result = target - arr[i];
        console.log("result", result);
        if (arr.indexOf(result) !== -1) {
            response = [i, arr.indexOf(result)];
            response.sort();
        }
    }
    return response;
};
const nums = [2, 7, 11, 15];
const target = 9;
const result = exports.sumNumberArray(nums, target);
console.log(result);
console.log(nums.indexOf(1));
