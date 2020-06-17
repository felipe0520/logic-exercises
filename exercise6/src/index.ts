//Escreva uma função que receba uma string e determine a sua reversa (com as letras de trás para frente).
// Para a entrada escola, deve retornar alocse

let stringTest = "escola";
const reverseString = (s: string) => {
  return s.split("").reverse().join("");
};

console.log(reverseString(stringTest));
