import React from "react";
import "./Componente.css";

const Contenedor = (props) => {
    return (
        <>
        <div className="contenedor-contenedor">
            <p>Esto es un contenedor</p>
            <p>{props.children}</p>
        </div>
        </>
    );
}

export default Contenedor;