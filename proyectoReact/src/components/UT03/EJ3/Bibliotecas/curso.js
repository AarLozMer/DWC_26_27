"use strict";

// Declaracion objeto JSON Curso
let curso = {
    "nombre": "Desarrollo Web",
    "profesor": "Juan Carlos",
    "duracion": "120",
    "alumnado": ["Andrea", "Nerea", "Pedro"],
    mostrarCurso() {
        for (const clase in this) {
            if (typeof  this[clase] !== "function") {
                console.log(`${clase}: ${this[clase]}`);
            }
        }
    }, 
    matricular(objeto) {
        this.alumnado.push(objeto);
    }
}
export {curso};