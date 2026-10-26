"use strict";

console.log(`Practica 1`);
import {curso} from "./Bibliotecas/curso.js";
const separador = "------------------";
curso.mostrarCurso();

console.log(`${separador}`);

console.log(`Practica 2`);
import {discente} from "./Bibliotecas/discente.js";
discente.imprimirInforme();
console.log(`${separador}`);

console.log(`Practica 3`);
curso.matricular(discente.nombre);
curso.mostrarCurso();
console.log(`${separador}`);

console.log(`Practica 4`);
import {mostrarObjetos} from "./Bibliotecas/mostrar.js";
console.log(mostrarObjetos(discente));
mostrarObjetos(curso);
console.log(`${separador}`);

