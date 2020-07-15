"use strict";
//Escreva uma função que recebe duas strings s e t e define se t é um anagrama de s.
//Ou seja, se com as mesmas letras de s, é possível escrever t.
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAnagram = void 0;
exports.verifyAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const letterS = {};
    const letterT = {};
    for (let i = 0; i < s.length; i++) {
        const charT = t[i];
        const charS = s[i];
        console.log(charS, charT);
        if (!letterS[charS]) {
            letterS[charS] = 1;
        }
        else {
            letterS[charS] += 1;
        }
        if (!letterT[charT]) {
            letterT[charT] = 1;
        }
        else {
            letterT[charT] += 1;
        }
    }
    for (let char in letterS) {
        if (letterT[char] !== letterS[char]) {
            return false;
        }
    }
    return true;
};
console.log(exports.verifyAnagram("banana", "nanaac"));
