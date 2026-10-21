"use strict";
const toCani = (texto) => {
    if(esTexto(texto) === true) {
    const texto_formateado = "";

    texto.split('').map((v,i,a) => {
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
    texto_formateado+=cantidadAleatoria("h");
    return texto_formateado;
    } else {
        return `Introduce una cadena de texto, carapollahhh`
    }
}

const esTexto = (text) => {
    return typeof(text) === String;
}

const esCaracter = (caracter) => {
    return caracter.length() === 1;
}

const cantidadAleatoria = (caracter) => {
    if (esCaracter(caracter)) {
        return caracter * Math.floor(Math.random()* (5 - 2) + 2);    
    } else {
        return `Me has introducido mas de un caracter, retrasado mental`;
    }
}

export {toCani};