"use strict";

function comprobarNumero(parametro) {
    if (!isNaN(parametro)){
        return analisisNumerico(parametro);    
    } 
    else {
        return "Lo que has introducido no es un numero parguela";
    }
}

function analisisNumerico(entrada) {
    if (entrada < 0 && entrada % 2 ===0) {
        return "Es negativo, y es par";
    }
    else if (entrada > 0 && entrada % 2 ==0 ) {
        return "Es positivo, y es par";
    } else if (entrada < 0 && entrada%2 ==1) {
        return "Es negativo y es impar";
    } else {
        return "Es positivo y es impar";
    }
    
}

export {comprobarNumero};