//Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces**
//dos dois elementos que somam o valor do **target**.
//Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução,
//e você não pode usar o mesmo elemento duas vezes..

export const sumNumberArray = (
  arr: number[],
  target: number
): number[] | undefined => {
  let response: number[] = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] + arr[i] === target) {
      response = [0, i];
      response.sort();
      return response;
    } else {
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
