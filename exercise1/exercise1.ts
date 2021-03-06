/*
a. Faça uma função que receba um array de números e devolva um objeto que contenha as informações:
soma de todos os itens, quantidade de itens e multiplicação de todos os itens
 */

type infoArray = {
  sum: number;
  lenght: number;
  multiplication: number;
};
const array: number[] = [2, 3, 4, 5];

export const sumNumber = (array: number[]): number => {
  let sum = 0;
  array.forEach((el) => {
    return (sum += el);
  });
  return sum;
};

export const lenghtArray = (array: number[]): number => {
  let lenght;
  return (lenght = array.length);
};

export const multiplicationInArray = (array: number[]): number => {
  let multiplication = 1;
  array.forEach((el) => {
    if (el !== 0) {
      return (multiplication *= el);
    }
  });
  return multiplication;
};

const index = (array: number[]): {} => {
  let info: infoArray;
  sumNumber(array);
  return (info = {
    sum: sumNumber(array),
    lenght: lenghtArray(array),
    multiplication: multiplicationInArray(array),
  });
};
// const response = index(array);

/*
Letra B: aça uma função que receba um array de números e 
devolve um objeto que contenha as informações: maior número e menor número 
 */

type greaterAndLesserArray = {
  greater: number;
  lesser: number;
};

const greaterNumber = (numbers: number[]) => {
  let greater = numbers[0];

  for (let i of numbers) {
    if (i > greater) {
      greater = i;
    }
  }
  return greater;
};

const lesserNumber = (numbers: number[]) => {
  let lesser = numbers[0];

  for (let i of numbers) {
    if (i < lesser) {
      lesser = i;
    }
  }
  return lesser;
};

const verifyArray = (numbers: number[]): greaterAndLesserArray => {
  return {
    greater: greaterNumber(numbers),
    lesser: lesserNumber(numbers),
  };
};

console.log(verifyArray(array));
