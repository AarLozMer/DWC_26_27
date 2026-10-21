import React, {useState} from "react";
import {generarFrutaAleatorio} from "../../libraries/funciones";
import {generarFrutaAleatorio} from "../../libraries/funciones";
const Verduras = () => {
    // Origen de los datos
    const listadoInicial = ["Lechuga", "Tomate", "Pimiento"]

    const [listado, setListado] = useState(listadoInicial);
    
    return (
        <>
        <h2>Ejemplo con verduras</h2>
        <div>
            {Array.isArray(listado) && listado.length ? listado.map((v,i,a) => {
              return (
                <p key={i}>
                    <b>{v}</b>{" "}
                </p>
              )  
            }) : "No hay listado, idiota"}
        </div>
        </>

        
    )
}

export default Verduras;