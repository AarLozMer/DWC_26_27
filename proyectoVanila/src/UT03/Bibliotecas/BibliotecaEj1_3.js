"use strict";
import {esArray} from "./BibliotecaEj1_4.js";
const calcularTotal = (factura) => {
    if (esArray(factura)) {
        const primerArray = [...factura];
        const segundoArray = new Array(factura.length);
        const tercerArray = new Array(factura.length);
        try {
            return factura.map((v,i,a) => {
                if (comprobarDouble(v)) {
                segundoArray[i]= calcularPropina(v);
                tercerArray[i]= v + calcularPropina(v);
                console.log(`Para la ${i+1} factura de ${primerArray[i].toFixed(2)} €, se le atribuye una propina de ${segundoArray[i].toFixed(2)} €, por lo que el precio final es de ${tercerArray[i].toFixed(2)} €`);
                } else {
                    throw new Error(`No me has introducido una lista de facturas, carapolla`);
                }
            });
        } 
        catch (e) {
            return e.message;
        }
    } else {
        return `No me has introducido una lista de facturas`;
    }
}

const calcularPropina = (factura) => {
    if (factura < 50) {
        return factura*0.2;
    }
    else if (factura >= 50 && factura <=200) {
        return factura*0.15;
    }
    else {
        return factura*0.1;
    }
}


/*
    const sumarNumeros = (cosa1, cosa2) => {
        return cosa1+cosa2;
    }
*/
const comprobarDouble = (dolorosa) => {
    /*  Con Number.isFinite comprobamos que tenga un tamaño predefinido 
        y con !isInteger comprobamos que no sea entero, 
        basicamente solo acepta Floats o Doubles (en java)
    */
    return Number.isFinite(dolorosa) && !Number.isInteger(dolorosa);
}
export {calcularTotal};