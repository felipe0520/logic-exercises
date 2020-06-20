"use strict";
//Para resumir as funcionalidades, há três exemplos com as chamadas dessa função e a resposta desejada:
// completeArray([11, 15, 17], 20) saída [11, 15, 17, 18, 19, 20]
// completeArray([100, 310, 520], 200)  saída [100, 310, 520]
// completeArray([14, 78, 90], 10)  sáida [10, 11, 12, 13, 14, 78, 90]
const arr = [11, 15, 17];
const n = 20;
const completeArray = (array, n) => {
    if (n < array[0]) {
        return completeStartArray(array);
    }
    if (n > array[array.length - 1]) {
        return completeFinalyArray(array);
    }
    return array;
};
const completeStartArray = (array) => {
    let aux = [];
    let response;
    for (let i = n; i < array[array.length - 1]; i++) {
        if (i < array[0]) {
            aux.push(i);
        }
        else {
            return (response = [...aux, ...array]);
        }
    }
};
const completeFinalyArray = (array) => {
    let aux = [];
    let response;
    for (let i = array[array.length - 1] + 1; i <= n; i++) {
        aux.push(i);
    }
    return (response = [...array, ...aux]);
};
console.log(completeArray(arr, n));
