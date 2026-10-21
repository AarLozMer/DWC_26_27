"use strict";

const calcular = (funcion1, funcion2, funcion3) => {
    return `${funcion1}.\n Suma de arrays recibidos\n ${funcion2}. \n Array impreso de forma correcta ${funcion3}`;
}

const generarArray = (tamano) => {
    const arrayGenerado = new Array(tamano);
    return arrayGenerado.map((v, i, a) => {
        arrayGenerado[i] = Math.floor(Math.random()*101);
        return(`La posicion ${i+1} tiene un valor de ${arrayGenerado[i]}`);
    });
}

const recibirArrays = (array1, array2) => {
    if (esArray(array1) && esArray(array2)) {
        if (compararLongitudArrays(array1, array2)) {
            const tercerArray = new Array(array1.length);
            
            return array2.map((v, i, a) => {
                return tercerArray[i] = array1[i] + array2[array2.length - i];
            });
        } else {
            return `Cara almendra, los arrays no tienen la misma longitud`;
        }
    } else {
        return `Cabezon, introduce 2 arrays`;
    }
}

const imprimirArray = (arrayParaImprimir) =>  {
    return arrayParaImprimir.map((v, i, a) => {
        return `\nPosición ${i+1},  tiene el valor de: ${arrayParaImprimir[i]}`;
    });
}

const esArray = (array) => {
    return Array.isArray(array);
}

const compararLongitudArrays = (a1, a2) => {
    return a1.length === a2.length;
}

export {calcular, generarArray, recibirArrays, imprimirArray, esArray};