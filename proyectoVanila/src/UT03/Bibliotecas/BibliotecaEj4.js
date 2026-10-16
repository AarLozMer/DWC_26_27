"use strict";

const calcular = (generarArray, recibirArrays, imprimirArray) => {
    
}

const generarArray = (tamano) => {
    const arrayGenerado = new Array(tamano).fill(0);
    return arrayGenerado.map((v, i, a) => {
       return arrayGenerado[i] = Math.floor(Math.random()*100) + 1;
    });
}

const recibirArrays = (array1, array2) => {
    if (esArray(array1) && esArray(array2)) {
        if (compararLongitudArrays(array1, array2)) {
            const tercerArray = new Array(array1.length).fill(0);
            
            return array2.map((v, i, a) => {
                return `${tercerArray[i] = array1[i] + array2[array2.length - 1 -i]}`;
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