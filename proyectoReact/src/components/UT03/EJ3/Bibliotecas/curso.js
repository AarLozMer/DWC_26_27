"use strict";
import curso from "./curso.json" with {type: "json"};;

const mostrarCurso = () => {
    for (const propiedad in curso) {
        console.log(`${propiedad}: ${curso[propiedad]}`);
    }
}

export {mostrarCurso};