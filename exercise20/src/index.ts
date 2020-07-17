//Escreva uma função que determine se um tabuleiro de Sudoku é válido ou não.
//Somente as casas preenchidas devem ser validadas de acordo com as seguintes regras:

// 1. Cada linha deve conter números de 1-9 sem repetição
// 2. Cada coluna deve conter números de 1-9 sem repetição
// 3. Cada uma das 9 sub-caixas 3x3 do tabuleiro deve conter números de 1-9 sem repetição

export const verifySudoku = (arr: string[][]): boolean => {
  let index = 0;
  let squareLimit = 3;
  let indexSquare = 0;

  while (index < arr.length) {
    const numberRepeatedInLine = verifyLine(arr, index);
    const numberRepeatedInColumn = verifyColumn(arr, index);
    index++;
    if (numberRepeatedInLine || numberRepeatedInColumn) {
      return false;
    }
  }

  while (indexSquare < arr.length) {
    const numberRepeatedInSquareHorizontal = verifySquareHorizontal(
      arr,
      indexSquare,
      squareLimit
    );
    const numberRepeatedInSquareVertical = verifySquareVertical(
      arr,
      indexSquare,
      squareLimit
    );
    squareLimit += 3;
    indexSquare += 3;
    if (numberRepeatedInSquareHorizontal || numberRepeatedInSquareVertical) {
      return false;
    }
  }

  return true;
};

export const verifyLine = (arr: string[][], index: number = 0): boolean => {
  const numberLine = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[index][j] !== ".") {
      numberLine.push(arr[index][j]);

      if (numberLine.indexOf(arr[index][j]) !== numberLine.length - 1) {
        return true;
      }
    }
  }

  return false;
};

export const verifyColumn = (arr: string[][], index: number = 0): boolean => {
  const numberColumn = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j][index] !== ".") {
      numberColumn.push(arr[j][index]);

      if (numberColumn.indexOf(arr[j][index]) !== numberColumn.length - 1) {
        return true;
      }
    }
  }
  return false;
};

export const verifySquareHorizontal = (
  arr: string[][],
  index: number = 0,
  limit: number = 3
): boolean => {
  const numberSquare = [];

  for (let j = 0; j < 3; j++) {
    for (let x = index; x < limit; x++) {
      if (arr[j][x] !== ".") {
        numberSquare.push(arr[j][x]);

        if (numberSquare.indexOf(arr[j][x]) !== numberSquare.length - 1) {
          return true;
        }
      }
    }
  }

  return false;
};

export const verifySquareVertical = (
  arr: string[][],
  index: number = 0,
  limit: number = 3
): boolean => {
  const numberSquare = [];

  for (let j = 0; j < 3; j++) {
    for (let x = index; x < limit; x++) {
      if (arr[x][j] !== ".") {
        numberSquare.push(arr[x][j]);

        if (numberSquare.indexOf(arr[x][j]) !== numberSquare.length - 1) {
          return true;
        }
      }
    }
  }

  return false;
};

const sudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
