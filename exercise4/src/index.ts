const stringAndNumber = "es1c2o4la5";
const stringOnlyNumber = "12343219975587";

type infoString = {
  lenght: number;
  firstCharacter: string;
  lastCharacter: string;
};

const verifyStringNumber = (s: string): boolean => {
  for (let i of s) {
    if (!i.match(/\d/)) {
      return false;
    }
  }
  return true;
};

console.log(verifyStringNumber(stringOnlyNumber));
