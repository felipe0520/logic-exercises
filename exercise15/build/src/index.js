"use strict";
//Escreva uma função que recebe uma string que pode conter somente os seguintes caracteres:
// `'('`,  `')'`,  `'['`,  `']'`,  `'{'`,  `'}'` , e retorna `true` para uma string válida, e
//`false` para uma inválida.
const checkString = (s) => {
    const stack = [];
    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else {
            const last = stack.pop();
            if ((last == "[" && char !== "]") ||
                (last == "{" && char !== "}") ||
                (last == "(" && char !== ")")) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
const string = "(()[]{}[]}";
console.log(checkString(string));
