"use strict";
import discente from "./discente.json" with {type : "json"};

const calcularMedia = () => {
    const primera = discente.notas.primera;
    const segunda = discente.notas.segunda;
    const tercera = discente.notas.tercera;

    return sumar (primera, segunda, tercera) / 3;
}

const sumar = (cosa1, cosa2, cosa3) => {
    return cosa1 + cosa2 + cosa3;
}

const imprimirAficiones = () => {
    for (const propiedad of discente.aficiones) {
        
        console.log(`   ${propiedad}`);
    }
}

const imprimirInforme = () => {
    console.log(`Alumno: ${discente.nombre}, apellidos: ${discente.apellidos}.\n Aficiones: {`);
    imprimirAficiones();
    console.log(`}\nNota media: ${calcularMedia()}`);
}

export {imprimirInforme, calcularMedia, imprimirAficiones};