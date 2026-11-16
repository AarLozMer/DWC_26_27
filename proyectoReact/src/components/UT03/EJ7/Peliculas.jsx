import { useState } from "react";
import peliculasJson from "../../../data/peliculas.json";
import Actor from "./Actor.jsx";
const Peliculas = () => {
    const [peliculas, setPeliculas] = useState(peliculasJson.peliculas);
    return (
        <div>
            <h1>Peliculas</h1>
            {peliculas.map((pelicula) => (
                <div key={pelicula.id}>
                    <h2>{pelicula.nombre}</h2>
                    <p>{pelicula.director}</p>
                    <p>{pelicula.clasificacion}</p>
                    <p>{pelicula.cartelera}</p>
                    <h3>Actores</h3>
                    {pelicula.actores.map((actor) => (
                        <Actor key={actor.nombre} actor={actor}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Peliculas;