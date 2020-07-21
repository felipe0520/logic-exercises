//Dado um array ordenado `nums` e um valor alvo `target`, retorne o index do array no qual o valor se encontra se ele for encontrado. Se não, retorne o index no qual ele estaria se estivesse no array (lembrando que ele é ordenado).
//Assuma que o array não possui elementos duplicados.

export const indexInArray = (
  arr: number[],
  target: number
): number | undefined => {
  if (arr.indexOf(target) !== -1) {
    return arr.indexOf(target);
  }

  if (arr.indexOf(target + 1) !== -1) {
    return arr.indexOf(target + 1);
  }

  if (arr.indexOf(target - 1) !== -1) {
    return arr.indexOf(target - 1) + 1;
  }
};

console.log(indexInArray([1, 3, 5, 6], 5));
