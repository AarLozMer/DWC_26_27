"use strict";

// Función que realiza la tabla de multiplicar del numero proporcionado hasta el 2
const tablasDeMultiplicar = (num) => {
    let resultado = "";

    for (let i = num; i >= 2; i--) {
        resultado += `Tabla del ${i}\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i*j}\n`;
        }
             
    }
    return resultado;
}



const multiplicarNumeros = (numero, funcion) => {

}