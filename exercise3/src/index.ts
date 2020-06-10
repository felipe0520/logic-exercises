const stringOne = "escola";
const stringTwo = "Escola";

type infoString = {
  lenght: number;
  firstCharacter: string;
  lastCharacter: string;
};

const stringComparation = (sOne: string, sTwo: string): boolean => {
  return sOne === sTwo;
};

const stringComparationToLowerCase = (sOne: string, sTwo: string): boolean => {
  return sOne.toLowerCase() === sTwo.toLowerCase();
};

console.log(stringComparationToLowerCase(stringOne, stringTwo));
