"use strict";

function comprobarProducto(nombre="Producto genérico", precio=100, impuesto=21) {
    try {
        if (isNaN(precio)) {
            throw new Error("El precio introducido no es un numero");
        }
        else if (isNaN(impuesto)) {
            throw new Error("La cantidad de impuestos aplicada no es un numero");
        }
        else if (precio < 0) {
            throw new Error("El precio es menor que 0, introduzcalo de nuevo");
        }
        else if (impuesto < 0 || impuesto > 100) {
            throw new Error("Los impuestos atribuidos al producto deben estar entre 0 y 100");
        }
        else {
            return nombre + " " + precio + " " + impuesto;
        }
    } catch (Error) {
        console.error(Error.message);
    }
}

export {comprobarProducto};