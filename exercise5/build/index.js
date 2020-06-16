"use strict";
const transformTimer = (time) => {
    if (time < 60) {
        return trasformSeconds(time);
    }
    if (time < 3600) {
        return transformMinuts(time);
    }
    return transformHours(time);
};
const trasformSeconds = (time) => {
    return time + "s";
};
const transformMinuts = (time) => {
    return `${Math.floor(time / 60)}m ${Math.floor(time % 60)}s `;
};
const transformHours = (time) => {
    return `${Math.floor(time / 3600)}h  ${Math.floor((time % 3600) / 60)}m ${Math.floor(time % 60)}s `;
};
console.log(transformTimer(3700));
