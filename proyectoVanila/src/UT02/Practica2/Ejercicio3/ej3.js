"use strict";

function multiplicarNumeros(numero) {
    if (!isNaN(numero) == true) {
        if (numero > 0) {
            let acum = "";
            let multiplo = 0;
            for (let i = 1; i < numero; i++) {
                multiplo = i * 3;
                acum+=multiplo + " ";
                
            }
            return acum;
        }
         else {
            return "El numero debe de ser positivo";
         }
    } else {
        return "El parametro introducido no es un numero";
    }
}

export {multiplicarNumeros};