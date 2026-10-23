"use strict";
const toCani = (texto) => {
    if(esTexto(texto) === true) {
    
    return alternarMayusculasTexto(texto);
    } else {
        return `Introduce una cadena de texto, carapollahhh`
    }
}

const esTexto = (text) => {
    return typeof(text) === "string";
}

const esCaracter = (caracter) => {
    return caracter.length === 1;
}

const cantidadAleatoria = () => {
    return Math.floor(Math.random()* (5 - 2) + 2);            
}

const alternarMayusculasTexto = (frase) => {
    let texto_formateado = "";

    frase.split('').map((v,i,a) => {
        if(i%2==1) {
            if (v === "c") {
                texto_formateado+="K";
            } else if (v === "k" ) {
                texto_formateado+="C";
            } else if (v === "C") {
                texto_formateado+="k";
            } else if (v === "K") {
                texto_formateado+="c";
            } else if (v === v.toUpperCase()){
                texto_formateado+=v;
            } else {
                texto_formateado+=v.toUpperCase();
            }
        } else {
            if (v === "c") {
                texto_formateado+="k";
            } else if (v === "k" ) {
                texto_formateado+="c";
            } else if (v === "C") {
                texto_formateado+="K";
            } else if (v === "K") {
                texto_formateado+="C";
            } else if (v === v.toUpperCase()){
                texto_formateado+=v.toLowerCase();
            } else {
                texto_formateado+=v.toLowerCase();
            }
        }
    });
    texto_formateado+="h".repeat(cantidadAleatoria());
    return texto_formateado;
}

export {toCani};