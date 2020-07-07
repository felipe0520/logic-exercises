// Escreva uma função que recebe um array de números chamado nums e um número k maior que 0,
//e retorna um array que seja o array
//nums rotacionado k posições para a direita. Seguem exemplos para melhor entendimento:

const rotationArray = (arr: number[], k: number): number[] => {
  let response = [];
  let length = arr.length;

  for (let i = length - k; i < arr.length; i++) {
    response.push(arr[i]);
  }

  for (let i = 0; i < length - k; i++) {
    response.push(arr[i]);
  }

  return response;
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 2;

console.log(rotationArray(nums, k));
