//Você deve implementar uma função que recebe um array de números e complete o array com **todos os números faltantes**
//entre o maior e o menor número. O retorno deve ser esse array completado **ordenado**. Veja os exemplos abaixo:
// - Para a entrada `[8, 3, 1]` o retorno deve ser `[1, 2, 3, 4, 5, 6, 7, 8]`
// - Para a entrada `[10, 20, 17, 22]`, o retorno deve ser `[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]`
// - Para a entrada `[3, 1, 2]`, o retorno deve ser `[1, 2, 3]`
// - Para a entrada `[101, 102, 103, 104]`, o retorno deve ser `[101, 102, 103, 104]`
// - Para e entrada `[]`, o retorno deve ser `[]`U

export const completArray = (a: number[]) => {
  let higherNumber = a[0];
  let lowestNumber = a[1];
  let index = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > higherNumber) {
      higherNumber = a[i];
    }
    if (a[i] < lowestNumber) {
      lowestNumber = a[i];
    }
  }

  let response = a;

  for (let i = lowestNumber; i < higherNumber; i++) {
    if (!a.includes(i)) {
      if (i > lowestNumber && i < higherNumber) {
        response.push(i);
      }
      index++;
    }
  }
  return response.sort();
};
