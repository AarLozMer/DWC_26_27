import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
    // Javascript Vanilla
    return (
        // JSX
        <>
            <div className="interprete-contenedor">
                <img src="props.imagen" alt="" />
                <h2>{props.nombre}</h2>
                <h4>{props.children}</h4>
            </div>
        </>
    );
}

export default Interprete;