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
