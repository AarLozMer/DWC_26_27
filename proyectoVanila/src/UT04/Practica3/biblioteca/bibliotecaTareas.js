"use strict";

// Contador para generar identificadores únicos sin usar 'this'
let contadorTareas = 0;

/**
 * Elimina las tareas de ejemplo del HTML y enlaza los eventos onclick
 * de los botones principales (Añadir y Mostrar).
 */
export const iniciarGestor = () => {
  const contenedorPendientes = document.getElementById("pendientes");
  const contenedorAcabadas = document.getElementById("acabadas");
  const botonAnadir = document.querySelector(".add");
  const botonMostrar = document.querySelector(".sho");

  // Capturamos con spread las tareas de muestra de ambas columnas (.tarea y .acabada)
  const tareasPrueba = [
    ...contenedorPendientes.getElementsByClassName("tarea"),
    ...contenedorAcabadas.getElementsByClassName("acabada"),
  ];
  tareasPrueba.map((tarea) => tarea.remove());

  // Asignamos eventos por onclick sin tocar el HTML
  botonAnadir.onclick = () => anadirTarea();
  botonMostrar.onclick = () => mostrarArchivadas();
};

/**
 * Valida el <textarea> y crea una nueva tarea en Pendientes
 * respetando la estructura y clases de gestor.css.
 */
export const anadirTarea = () => {
  const areaTexto = document.querySelector("textarea");
  const texto = areaTexto.value.trim();

  // Validación: avisar al usuario si intenta añadir una tarea vacía
  if (texto === "") {
    alert("Aviso: Escribe el texto de la tarea antes de añadirla.");
    return;
  }

  contadorTareas++;
  const idTarea = `tarea-${contadorTareas}`;

  // Creamos la estructura: div.tarea > p + p.botones > (input.del + input.end)
  const divTarea = document.createElement("div");
  const parrafoTexto = document.createElement("p");
  const parrafoBotones = document.createElement("p");
  const botonBorrar = document.createElement("input");
  const botonAcabar = document.createElement("input");

  divTarea.id = idTarea;
  divTarea.classList.add("tarea");
  parrafoTexto.textContent = texto;
  parrafoBotones.classList.add("botones");

  // Configuramos los <input type="button"> usando .value
  botonBorrar.type = "button";
  botonBorrar.value = "Borrar";
  botonBorrar.classList.add("del");
  botonBorrar.onclick = () => borrarTarea(idTarea);

  botonAcabar.type = "button";
  botonAcabar.value = "Acabar";
  botonAcabar.classList.add("end");
  botonAcabar.onclick = () => acabarTarea(idTarea);

  // Montamos el árbol y lo insertamos en Pendientes
  parrafoBotones.appendChild(botonBorrar);
  parrafoBotones.appendChild(botonAcabar);
  divTarea.appendChild(parrafoTexto);
  divTarea.appendChild(parrafoBotones);

  document.getElementById("pendientes").appendChild(divTarea);

  // Limpiamos el textarea
  areaTexto.value = "";
};

/**
 * Elimina definitivamente una tarea pendiente del DOM.
 * @param {string} idTarea - Identificador único del div de la tarea.
 */
export const borrarTarea = (idTarea) => {
  const tarea = document.getElementById(idTarea);
  if (tarea) {
    tarea.remove();
  }
};

/**
 * Pasa una tarea a Acabadas, cambia su clase CSS a 'acabada' (fondo verde)
 * y actualiza el value y evento de sus botones a 'Archivar' y 'Volver'.
 * @param {string} idTarea - Identificador único del div de la tarea.
 */
export const acabarTarea = (idTarea) => {
  const tarea = document.getElementById(idTarea);
  const contenedorAcabadas = document.getElementById("acabadas");

  // Cambiamos la clase visual (gestor.css ya suele tener .acabada con fondo verde)
  tarea.classList.remove("tarea");
  tarea.classList.add("acabada");

  // Seleccionamos los dos inputs dentro de la tarea con spread
  const [botonPrimero, botonSegundo] = [...tarea.getElementsByTagName("input")];

  botonPrimero.value = "Archivar";
  botonPrimero.onclick = () => archivarTarea(idTarea);

  botonSegundo.value = "Volver";
  botonSegundo.onclick = () => volverTarea(idTarea);

  // appendChild mueve el nodo existente de Pendientes a Acabadas
  contenedorAcabadas.appendChild(tarea);
};

/**
 * Devuelve una tarea de Acabadas a Pendientes restaurando clases,
 * textos (.value) y eventos originales.
 * @param {string} idTarea - Identificador único del div de la tarea.
 */
export const volverTarea = (idTarea) => {
  const tarea = document.getElementById(idTarea);
  const contenedorPendientes = document.getElementById("pendientes");

  tarea.classList.remove("acabada");
  tarea.classList.add("tarea");

  const [botonPrimero, botonSegundo] = [...tarea.getElementsByTagName("input")];

  botonPrimero.value = "Borrar";
  botonPrimero.onclick = () => borrarTarea(idTarea);

  botonSegundo.value = "Acabar";
  botonSegundo.onclick = () => acabarTarea(idTarea);

  contenedorPendientes.appendChild(tarea);
};

/**
 * Oculta una tarea acabada añadiendo la clase 'oculto' sin borrarla del DOM.
 * @param {string} idTarea - Identificador único del div de la tarea.
 */
export const archivarTarea = (idTarea) => {
  const tarea = document.getElementById(idTarea);
  if (tarea) {
    tarea.classList.add("oculto");
  }
};

/**
 * Muestra de nuevo todas las tareas acabadas que estaban archivadas.
 */
export const mostrarArchivadas = () => {
  const contenedorAcabadas = document.getElementById("acabadas");
  const tareasOcultas = [...contenedorAcabadas.getElementsByClassName("oculto")];

  tareasOcultas.map((tarea) => tarea.classList.remove("oculto"));
};