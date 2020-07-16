//Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces**
//dos dois elementos que somam o valor do **target**.
//Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução,
//e você não pode usar o mesmo elemento duas vezes..

export const countNegativeNumber = (arr: number[][]): number => {
  let numbersNegative = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] < 0) {
        numbersNegative++;
      }
    }
  }
  return numbersNegative;
};
