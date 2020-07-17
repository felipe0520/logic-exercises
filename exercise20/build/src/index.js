"use strict";
//Escreva uma função que determine se um tabuleiro de Sudoku é válido ou não.
//Somente as casas preenchidas devem ser validadas de acordo com as seguintes regras:
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySquareVertical = exports.verifySquareHorizontal = exports.verifyColumn = exports.verifyLine = exports.verifySudoku = void 0;
// 1. Cada linha deve conter números de 1-9 sem repetição
// 2. Cada coluna deve conter números de 1-9 sem repetição
// 3. Cada uma das 9 sub-caixas 3x3 do tabuleiro deve conter números de 1-9 sem repetição
exports.verifySudoku = (arr) => {
    let index = 0;
    let squareLimit = 3;
    let indexSquare = 0;
    while (index < arr.length) {
        const numberRepeatedInLine = exports.verifyLine(arr, index);
        const numberRepeatedInColumn = exports.verifyColumn(arr, index);
        index++;
        if (numberRepeatedInLine || numberRepeatedInColumn) {
            return false;
        }
    }
    while (indexSquare < arr.length) {
        const numberRepeatedInSquareHorizontal = exports.verifySquareHorizontal(arr, indexSquare, squareLimit);
        const numberRepeatedInSquareVertical = exports.verifySquareVertical(arr, indexSquare, squareLimit);
        squareLimit += 3;
        indexSquare += 3;
        if (numberRepeatedInSquareHorizontal || numberRepeatedInSquareVertical) {
            return false;
        }
    }
    return true;
};
exports.verifyLine = (arr, index = 0) => {
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
exports.verifyColumn = (arr, index = 0) => {
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
exports.verifySquareHorizontal = (arr, index = 0, limit = 3) => {
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
exports.verifySquareVertical = (arr, index = 0, limit = 3) => {
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
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(exports.verifySudoku(sudoku));
