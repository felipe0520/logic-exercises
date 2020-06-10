"use strict";
const stringTest = "escola";
const stringData = (s) => {
    return {
        lenght: s.length,
        firstCharacter: s.charAt(0),
        lastCharacter: s.charAt(s.length - 1),
    };
};
const transformStringInArray = (s) => {
    let response = [];
    for (let i of s) {
        response.push(i);
    }
    return response;
};
console.log(transformStringInArray(stringTest));
