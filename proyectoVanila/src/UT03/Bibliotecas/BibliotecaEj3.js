"use strict";
const calcularTotal = (factura) => {
    if (Array.isArray(factura)) {
        const segundoArray = [factura.length];
        const tercerArray = [factura.length];
        factura.map((v,i,a) => {
            segundoArray[i]=v;
            tercerArray[i]=calcularPropina(v);
        });

        return tercerArray;
    } else {
        return `No me has introducido una lista de facturas`;
    }
}

const calcularPropina = (factura) => {
    if (factura < 50) {
        return factura*1.2;
    }
    else if (factura >= 50 && factura <=200) {
        return factura*1.15;
    }
    else {
        return factura*1.1;
    }
}

const comprobarDouble = (dolorosa) => {
    /*  Con Number.isFinite comprobamos que tenga un tamaño predefinido 
        y con !isInteger comprobamos que no sea entero, 
        basicamente solo acepta Floats o Doubles (en java)
    */
    return Number.isFinite(dolorosa) && !Number.isInteger(dolorosa);
}
export {calcularTotal, comprobarDouble};