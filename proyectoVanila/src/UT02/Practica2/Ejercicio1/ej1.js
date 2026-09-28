"use strict";

function comprobarMes(number) {
    if (!isNaN(number) === true) {
        if (number <= 0 || number > 12 ) {
            return "Subnormal introduce un numero entre el 1 y el 12";
        } else {
            let meses = ["as", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            for (let i = 1; i < meses.length; i++) {
                if (number === i) {
                    return meses.at(i);
                } else {
                    continue;
                }
            }
        }
    } else {
        return "Retrasado mental introduce un puto numero."
    }
}

export {comprobarMes};