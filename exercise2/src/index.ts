const stringTest = "escola";

type infoString = {
  lenght: number;
  firstCharacter: string;
  lastCharacter: string;
};

const stringData = (s: string): infoString => {
  return {
    lenght: s.length,
    firstCharacter: s.charAt(0),
    lastCharacter: s.charAt(s.length - 1),
  };
};

const transformStringInArray = (s: string): string[] => {
  let response = [];
  for (let i of s) {
    response.push(i);
  }
  return response;
};
