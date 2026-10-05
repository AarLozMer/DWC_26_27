"use strict";
// Función que realiza la tabla de multiplicar del numero proporcionado hasta el 2
const multiplicarNumeros = (num) => {
    let resultado = "";

    for (let i = num; i >= 2; i--) {
        resultado += `Tabla del ${i}\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i*j}\n`;
        }
        resultado+=`--------------------------------\n`;
             
    }
    return resultado;
}

const comprobarPositivo = (num) => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

const comprobarEntero = (num) => {
    const ejemplo = 2;

    if (typeof num !==  ejemplo) {
        return false;
    } else {
        return true;
    }
}

const tablasDeMultiplicar = (numero, funcion) => {
    if (comprobarPositivo(numero) === true && comprobarEntero(numero) === false) {
        return multiplicarNumeros(numero);
    } else {
        return `Introduce un numero entero positivo retrasado mental`;
    }
}

export {tablasDeMultiplicar, multiplicarNumeros};