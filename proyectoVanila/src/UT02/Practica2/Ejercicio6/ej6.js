"use strict";

function calcularOperaciones(num1, num2, parametro) {
    if (!isNaN(num1)==true && !isNaN(num2)==true && typeof parametro === 'string' ) {
        if (parametro === "+") {return num1 + num2;}
        else if (parametro === "-") {return num1 - num2;}
        else if (parametro === "*") {return num1 * num2;}
        else if (parametro === "/") {return num1 / num2;}
        else if (parametro === "%") {return num1 % num2;}
    } else {
        return "Uno de los numeros introducidos o el parametro son incorrectos, pruebe de nuevo";
    }
}

export {calcularOperaciones};