"use strict";

const mostrarObjetos = (object) => {
    if (esObjeto(object)) {
        for (const clave in object) {
            const valor = object[clave];
            if (esNumero(valor) || esCadena(valor)) {
                console.log(valor);
            } else if (esArray(valor)) {
                tratarArray(valor);
            } else if (esFuncion(valor)) {
                valor();
            } else if (esObjeto(valor)) {
                mostrarObjetos(valor);
            } else {
                continue;
            }
        }
    } else {
        return `No me has entregado un objeto, anormal.`;
    }
}

const esObjeto = (objeto) => {
    return typeof(objeto) === "object" && objeto !==null && esArray(objeto);
}

const esNumero = (num) => {
    return typeof(num)==="number";
}

const esFuncion = (funcion) => {
    return typeof(funcion) === "function";
}

const esCadena = (str) => {
    return typeof(str)==="string";
}

const esArray = (arreglo) => {
    return Array.isArray(arreglo);
}

const tratarArray = (arreglo) => {
    return arreglo.map((v,i,a)=> {
        console.log(`${i}: ${v}`);
    });
}

export {mostrarObjetos};