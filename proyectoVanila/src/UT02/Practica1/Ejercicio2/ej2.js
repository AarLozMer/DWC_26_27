"use strict";

function puntuacionMedia() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total+=arguments[i];
    }
    return total/arguments.length;
}

function compararEquipos(equipo1, equipo2) {
    if (equipo1>equipo2){
        return "La media de puntos del equipo 1 es mayor con: " + equipo1 + " puntos";
    }
    if (equipo2>equipo1){
        return "La media de puntos del equipo 2 es mayor con: " + equipo2 + " puntos";
    }
    else {
        return "Ambas medias de puntos son iguales";
    }
}

export {puntuacionMedia, compararEquipos};