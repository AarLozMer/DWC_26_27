"use strict";
import { comprobarNumeros, sumarNumeros } from "../Bibliotecas/BibliotecaEj1.js";
// Practica1
console.log(`Practica 1`);
console.log(`--------------------------------`)
console.log(`${sumarNumeros(1,2,3,4,5,6,67,6,7,9,9,123,1456,1234)}`);
console.log(`${sumarNumeros(1, 2, 3, 5, 6, 7, 7, "as", 2)}`);
console.log(`${sumarNumeros(1)}`);
console.log(`--------------------------------`)

// Practica 2
import {tablasDeMultiplicar, multiplicarNumeros} from "../Bibliotecas/BibiliotecaEj2.js";
console.log(`Practica 2`);
console.log(`--------------------------------`)
console.log(tablasDeMultiplicar(6, multiplicarNumeros));
console.log(tablasDeMultiplicar(-2, multiplicarNumeros));


