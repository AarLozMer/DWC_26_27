"use strict";

function iteracionNumeros(numero1, numero2) {
    let final = "";
    let multiplo = numero2;
    for (let i = 1; i < numero1; i++) {
        final+= multiplo + " ";
        multiplo*=2;
    }
    return final;
}

export {iteracionNumeros};