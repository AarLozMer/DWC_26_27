"use strict";

const temporizador = (minutos, segundos) => {
    try {
        if (typeof(minutos)=== "undefined") {
            minutos = 0;
            
            if (comprobarMinutos(minutos) == true && comprobarSegundos(segundos) == true) {
                    if (minutos !== 0) {
                        return pasarMinutos(minutos, segundos);
                    } else {
                        return pasarSegundos(segundos);
                    }
            } else {
                throw new Error("Mongolo, introduce minutos y segundos, no piedras y castañas");
            }
        } else {
            if (esNumero(minutos) && esNumero(segundos)) {
                if (comprobarMinutos(minutos) && comprobarSegundos(segundos)) {
                    if (minutos !== 0) {
                        return pasarMinutos(minutos, segundos);
                    } else {
                        return pasarSegundos(segundos);
                    }
            } else {
                throw new Error("Mongolo, introduce minutos y segundos, no piedras y castañas");
            }
            } 
        }
        }
    
    catch (e) {
        return e.message;
    }
}

const comprobarMinutos = (min) => {
    return min >= 0 && min < 60;
}

const comprobarSegundos = (seg) => {
    return seg => 0 && seg < 60;
}

const esNumero = (num) => {
    return typeof(num) === "number";
}

const pasarMinutos = (min, seg) => {
    for (min; min >= 0; min--) {
        for (seg; seg >= 0; seg--) {
            console.log(`${min}' ${seg}"`);
        }
        seg = 59;
    }    
}
const pasarSegundos = (seg) => {
    for (seg; seg >= 0; seg--) {
        console.log(`${seg}"`);
    }
}


export {temporizador};