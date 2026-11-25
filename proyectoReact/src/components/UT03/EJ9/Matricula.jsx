import { useState } from "react";
import matriculados from "../../../data/matriculados.json";
import Boton from "../../Utilidades/Boton.jsx";

const Matricula = () => {
    const [discentes, setDiscentes] = useState(matriculados.discentes);

    const filtrarSegundoDaw = () => {
        setDiscentes(discentes.filter((filtro) => 
            filtro.curso === "2DAW"));
    };

    const filtrarPrimeros = () => {
        setDiscentes(discentes.filter((filtro) => 
            filtro.curso.startsWith("1")));
    };

    const filtrarAficionLectura = () => {
        setDiscentes(discentes.filter((filtro) => 
            filtro.aficiones.includes("lectura")));
    };

    const filtrarDAW = () => {
        setDiscentes(discentes.filter((filtro) => 
            filtro.curso.includes("DAW")));
    }

    const 

    return (
        
        <div>
            
        </div>
    );
};


export default Matricula;