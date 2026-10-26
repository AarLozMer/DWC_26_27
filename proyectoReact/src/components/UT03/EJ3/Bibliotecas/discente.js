"use strict";

// Declaracion objeto discente
let discente = {
    "id": 1,
    "nombre": "Paco",
    "apellidos": "Gutierrez",
    "aficiones": ["lectura", "correr", "ir al cine"],
    "notas": {
        "primera":6,
        "segunda":7,
        "tercera":5
    },
    calcularMedia() {
        let primera = this.notas.primera;
        let segunda = this.notas.segunda;
        let tercera = this.notas.tercera;
        return sumar (primera, segunda, tercera) / 3;
    },
    imprimirAficiones() {
        for (const aficion of this.aficiones) {
            console.log(`   ${aficion}`);
        }
    },
    imprimirInforme() {
        console.log(`Alumno: ${this.nombre}, apellidos: ${this.apellidos}.\n Aficiones: {`);
        this.imprimirAficiones();
        console.log(`}\n Nota media: ${this.calcularMedia()}`);
    }
    
}




const sumar = (cosa1, cosa2, cosa3) => {
    return cosa1 + cosa2 + cosa3;
}





export {discente};