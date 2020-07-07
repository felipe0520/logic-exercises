// Exercício 1 Escreva uma função recursiva que:

//a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printIntegerAsc = (n: number) => {
  if (n <= 1) {
    return console.log(1);
  }
  printIntegerAsc(n - 1);
  console.log(n);
};

//b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printIntegerDes = (n: number) => {
  if (n <= 1) {
    return console.log(1);
  }
  console.log(n);
  printIntegerDes(n - 1);
};

const sumInt = (n: number, sum: number = 0): number => {
  if (n === 0) {
    return sum;
  }
  return (sum += sumInt(n - 1, n + 1));
};

// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const printArray = (input: number[], index: number = 0) => {
  if (index === input.length - 1) {
    console.log(input[index]);
    return;
  }

  console.log(input[index]);
};

//Escreva uma função recursiva que determine a quantidade de digitos de um número

const digitNumber = (n: number, response: number = 0): number => {
  if (response >= n.toString().length - 1) {
    return (response += 1);
  }
  return digitNumber(n, response + 1);
};

//Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos

const BigNumberIsArray = (
  input: number[],
  index: number = 0,
  bigNumber: number = 0
): number => {
  if (index === input.length) {
    return bigNumber;
  }

  if (bigNumber < input[index]) {
    bigNumber = input[index];
  }

  return BigNumberIsArray(input, index + 1, bigNumber);
};

console.log(BigNumberIsArray([1, 2, 4, 5, 6, 2, 1]));
