//Escreva uma função que recebe um número inteiro n e retorna um número que tenha os dígitos na ordem reversa.
//Seguem exemplos para melhor entendimento:

const invertNumber = (n: number): number | string => {
  const numberInString = n.toString();
  if (numberInString.length === 0) {
    return n;
  }

  let response: string | number = "";
  for (let i = numberInString.length; i >= 0; i--) {
    if (response) {
      response += numberInString[i];
    }
    if (!response) {
      response = numberInString[i];
    }
  }
  const lastDigit = response[numberInString.length - 1];

  if (lastDigit === "0") {
    response.substr(0, numberInString.length - 1);
  }

  const indexNegativeNumber = response.match(/-/)?.index;
  if (indexNegativeNumber) {
    response = Number(response.substr(0, indexNegativeNumber)) * -1;
  }
  return Number(response);
};
const n = 120;

console.log(invertNumber(n));
