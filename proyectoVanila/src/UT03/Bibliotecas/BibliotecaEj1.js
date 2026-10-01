"use strict";

// Funcion que comprueba si todos los valores del array proporcionado son numeros
const comprobarNumeros = (num = []) => {
    if (Array.isArray(num)) {
        return num.every((v, i, a) => {
            return !isNaN(v);
        });
    }
};

// Funcion que comprueba la longitud de un array
const comprobarLongitud = (num = []) => {
    if (num.length >= 2) {
        return true;
    }
}

// Función con la lógica del programa
const sumarNumeros = (...numeros) => {
    
    // Si el array está compuesto unicamente por números, y la longitud del array es >=2, se sumarán, si no el usuario será notificado amablemente.
    if (comprobarNumeros(numeros) && comprobarLongitud(numeros)) {
        // Para sumar los elementos del array necesitaremos acumular el resultado
        return `El resultado de la suma es: ${numeros.reduce((acumulador, v, i, a) => {
            return (acumulador += v);
        })}`;
        
    } else {
        return `Subnormal introduce bien los datos`;
    }
}
export  {comprobarNumeros, sumarNumeros};
