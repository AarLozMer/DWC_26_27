"use strict";

function sumarNumeros (...numeros) {
    try {
        const x = numeros.every((v, i, a) => {
            return typeof v === number;
        });
        if (x === true) {
            
        }
    } 
    
    catch (e) {
        return Error.mensage;
    }
}