//Uma operação matemática bastante utilizada em probabilidade e estatística é o **fatorial**,
//representado por um **!** (ponto de exclamação).
//Ele consiste em realizar a multiplicação de todos os números inteiros (a partir de 1) até aquele colocado na operação.
// Veja os exemplos abaixo:
//- `3! = 3*2*1 = 6`
//- `4! = 4*3*2*1 = 24`
//- `5! = 5*4*3*2*1 = 120`
//- `6! = 6*5*4*3*2*1 = 720`

const factorialInteger = (n: number) => {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("is number a not integer");
  }
  let response;
  if (n === 1 || n === 0) {
    return (response = 1);
  }
  for (let i = n - 1; i > 1; i--) {
    if (!response) {
      response = n;
    }
    response *= i;
  }
  return response;
};

let n = 1.1;

console.log(factorialInteger(1.4));
