"use strict";
function calcularIMC(masa, altura) {
    return masa / (Math.pow(altura, 2));
}

function compararIMC(persona1, persona2) {
    return persona1 > persona2;
}

export {calcularIMC, compararIMC};
