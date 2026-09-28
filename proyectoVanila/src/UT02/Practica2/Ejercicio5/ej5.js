"use strict";

function calcularMediaAritmetica () {
    let long = 0;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i]) == true) {
            sum+=arguments[i];
            long++;
        } else {
            continue
        }
    }
    return sum/long;
}
export {calcularMediaAritmetica};

