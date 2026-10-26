"use strict";

const temporizador = (minutos, segundos) => {
    try {
        if (typeof(segundos)=== "undefined") {
            segundos = 0;
            
            if (comprobarSegundos(segundos) == true) {
                let totalSegundos = minutos * 60 + segundos;
                return iniciarCuentaAtras(totalSegundos);
                    
            } else {
                throw new Error("Mongolo, introduce minutos y segundos, no piedras y castañas");
            }
        } else {
            if (esNumero(minutos) && esNumero(segundos)) {
                if (comprobarMinutos(minutos) && comprobarSegundos(segundos)) {
                    if (minutos !== 0) {
                        let totalSegundos = minutos * 60 + segundos;
                        return iniciarCuentaAtras(totalSegundos);
                    } else {
                        let totalSegundos = minutos * 60 + segundos;
                        return iniciarCuentaAtras(totalSegundos);
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
    return seg >= 0 && seg < 60;
}

const esNumero = (num) => {
    return typeof(num) === "number";
}



const iniciarCuentaAtras = (tiempo) => {
    const intervaloTiempo = setInterval(() => {
        if (tiempo <0) {
            clearInterval(intervaloTiempo);
            return;
        } 
        let min = Math.floor(tiempo/60);
        let seg = tiempo%60;
        console.log(`${min}' ${seg}"`);
        tiempo --;
    }, 1000);
}

export {temporizador};