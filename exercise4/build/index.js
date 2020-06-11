"use strict";
const stringAndNumber = "es1c2o4la5";
const stringOnlyNumber = "12343219975587";
const verifyStringNumber = (s) => {
    for (let i of s) {
        if (!i.match(/\d/)) {
            return false;
        }
    }
    return true;
};
console.log(verifyStringNumber(stringOnlyNumber));
