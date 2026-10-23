"use strict";
import { sumarNumeros } from "../Bibliotecas/BibliotecaEj1_1.js";
const separador = "--------------------------------";
// Ejercicio 1 de la practica 1
console.log(`Ejercicio 1 de la practica 1`);
console.log(`${separador}`);
console.log(`${sumarNumeros(1,2,3,4,5,6,67,6,7,9,9,123,1456,1234)}`);
console.log(`${sumarNumeros(1, 2, 3, 5, 6, 7, 7, "as", 2)}`);
console.log(`${sumarNumeros(1)}`);
console.log(`${separador}`);

// Ejercicio 2 de la practica 1
import {tablasDeMultiplicar, multiplicarNumeros} from "../Bibliotecas/BibiliotecaEj1_2.js";
console.log(`Ejercicio 2 de la practica 1`);
console.log(`${separador}`);
console.log(tablasDeMultiplicar(6, multiplicarNumeros));
console.log(tablasDeMultiplicar("As", multiplicarNumeros));
console.log(tablasDeMultiplicar(5.5, multiplicarNumeros));
console.log(`${separador}`);

// Ejercicio 3 de la practica 1
import {calcularTotal} from "../Bibliotecas/BibliotecaEj1_3.js";
console.log(`Ejercicio 3 de la practica 1`);
console.log(`${separador}`);
console.log(calcularTotal([1, 2, 3, 4, 5]));
console.log(calcularTotal([40.34, 67.45, 67.3]));
console.log(calcularTotal([123.45, 123.56, 34.56, 17.7890, 234.678, 10000.34, 3556.445]));
console.log(calcularTotal([123.567, 50.89, 346.78, 24.56]));
console.log(calcularTotal([56, 45, 67, 67, 89]));
console.log(`${separador}`);

// Ejercicio 4 de la practica 1
import {calcular, generarArray, imprimirArray, recibirArrays } from "../Bibliotecas/BibliotecaEj1_4.js";
console.log(`Ejercicio 4 de la practica 1`);
console.log(`${separador}`);
console.log(calcular(generarArray(5), recibirArrays([123, 115, 45, 78], [56, 67, 34, 98]), imprimirArray([123, 145, 67, 78, 56, 456])));
console.log(`${separador}`);


const cani1 = "Allí van los barcos, alzandose en el horizonte";
const cani2 = "El otro dia le dije a la Paqui que si queria probar mi chocolate, y me dijo que no, que no esta que es una maldita loca que es una ratatta, que ella quiere que le ponga en 4k 4k 4k 4k 4k, y yo le quiero dar, en 4K 4K 4K 4K";
// Ejercicio 1 de la practica 2
import { toCani } from "../Bibliotecas/BibliotecaEJ2_1.js";
console.log(`Ejercicio 1 de la practica 2`);
console.log(`${separador}`);
console.log(toCani(cani1));
console.log(toCani(cani2));
console.log(`${separador}`);


// Ejercicio 2 de la practica2

console.log (`Ejercicio 2 de la practica 2`);
console.log(`${separador}`);

console.log(`${separador}`);