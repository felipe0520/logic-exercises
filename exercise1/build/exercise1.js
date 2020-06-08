"use strict";
/*
a. Faça uma função que receba um array de números e devolva um objeto que contenha as informações:
soma de todos os itens, quantidade de itens e multiplicação de todos os itens
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationInArray = exports.lenghtArray = exports.sumNumber = void 0;
const array = [2, 3, 4, 5];
exports.sumNumber = (array) => {
    let sum = 0;
    array.forEach((el) => {
        return (sum += el);
    });
    return sum;
};
exports.lenghtArray = (array) => {
    let lenght;
    return (lenght = array.length);
};
exports.multiplicationInArray = (array) => {
    let multiplication = 1;
    array.forEach((el) => {
        if (el !== 0) {
            return (multiplication *= el);
        }
    });
    return multiplication;
};
const index = (array) => {
    let info;
    exports.sumNumber(array);
    return (info = {
        sum: exports.sumNumber(array),
        lenght: exports.lenghtArray(array),
        multiplication: exports.multiplicationInArray(array),
    });
};
const greaterNumber = (numbers) => {
    let greater = numbers[0];
    for (let i of numbers) {
        if (i > greater) {
            greater = i;
        }
    }
    return greater;
};
const lesserNumber = (numbers) => {
    let lesser = numbers[0];
    for (let i of numbers) {
        if (i < lesser) {
            lesser = i;
        }
    }
    return lesser;
};
const verifyArray = (numbers) => {
    return {
        greater: greaterNumber(numbers),
        lesser: lesserNumber(numbers),
    };
};
console.log(verifyArray(array));
