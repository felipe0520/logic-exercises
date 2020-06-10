"use strict";
const stringOne = "escola";
const stringTwo = "Escola";
const stringComparation = (sOne, sTwo) => {
    return sOne === sTwo;
};
const stringComparationToLowerCase = (sOne, sTwo) => {
    return sOne.toLowerCase() === sTwo.toLowerCase();
};
console.log(stringComparationToLowerCase(stringOne, stringTwo));
