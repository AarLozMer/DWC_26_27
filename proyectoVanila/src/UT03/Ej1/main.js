"use strict";
import { sumarNumeros } from "../Bibliotecas/BibliotecaEj1_1.js";
// Ejercicio 1 de la practica 1
console.log(`Ejercicio 1 de la practica 1`);
console.log(`--------------------------------`)
console.log(`${sumarNumeros(1,2,3,4,5,6,67,6,7,9,9,123,1456,1234)}`);
console.log(`${sumarNumeros(1, 2, 3, 5, 6, 7, 7, "as", 2)}`);
console.log(`${sumarNumeros(1)}`);
console.log(`--------------------------------`)

// Ejercicio 2 de la practica 1
import {tablasDeMultiplicar, multiplicarNumeros} from "../Bibliotecas/BibiliotecaEj1_2.js";
console.log(`Ejercicio 2 de la practica 1`);
console.log(`--------------------------------`)
console.log(tablasDeMultiplicar(6, multiplicarNumeros));
console.log(tablasDeMultiplicar("As", multiplicarNumeros));
console.log(tablasDeMultiplicar(5.5, multiplicarNumeros));
console.log(`--------------------------------`)

// Ejercicio 3 de la practica 1
import {calcularTotal} from "../Bibliotecas/BibliotecaEj1_3.js";
console.log(`Ejercicio 3 de la practica 1`);
console.log(`--------------------------------`)
console.log(calcularTotal([1, 2, 3, 4, 5]));
console.log(calcularTotal([40.34, 67.45, 67.3]));
console.log(calcularTotal([123.45, 123.56, 34.56, 17.7890, 234.678, 10000.34, 3556.445]));
console.log(calcularTotal([123.567, 50.89, 346.78, 24.56]));
console.log(calcularTotal([56, 45, 67, 67, 89]));
console.log(`--------------------------------`);

// Ejercicio 4 de la practica 1
import {calcular, generarArray, imprimirArray, recibirArrays } from "../Bibliotecas/BibliotecaEj1_4.js";
console.log(`Ejercicio 4 de la practica 1`);
console.log(`--------------------------------`)
console.log(calcular(generarArray(5), recibirArrays([123, 115, 45, 78], [56, 67, 34, 98]), imprimirArray([123, 145, 67, 78, 56, 456])));
console.log(`--------------------------------`)


const cani1 = "Allí van los barcos, alzandose en el horizonte";
// Ejercicio 1 de la practica 2
import { toCani } from "../Bibliotecas/BibliotecaEJ2_1.js";
console.log(`Ejercicio 1 de la practica 2`);
console.log(`--------------------------------`)
console.log(toCani(cani1));


console.log(`--------------------------------`)