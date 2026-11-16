import { useState } from "react";

const Actor = ({actor}) => {
    return (
        <div>
            <img src={actor.imagen} alt={actor.nombre} width="80"/>
            <h3>{actor.nombre}</h3>
            <p>{actor.biografia}</p>
        </div>
    );
};

export default Actor;