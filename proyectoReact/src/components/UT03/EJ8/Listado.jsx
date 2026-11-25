import { useState } from "react";

const Listado = () => {
    // Para empezar necesitaremos una lista vacia
    const [lista, setLista] = useState([]);
    
    
    const generarNumero = () => {
        // La variable prueba tendrá un valor variable
        let prueba = numAleatorio();
        // Si el valor generado está en la lista lo genera de nuevo
        while (estaEnLista(lista, prueba)) {
            prueba = numAleatorio();
        }

        // Cuando prueba tiene un valor que no está registrado lo añade a la lista
        setLista([...lista, prueba]);
    }

    const eliminarTodo = () => {
        setLista( [] );
    }


    return (
        <div>
            <div>
            <button onClick={generarNumero}>Generar Numero</button>
            <button onClick={eliminarTodo}>Eliminar</button>
        </div>
        
        <div>
            <h1>Lista de Números</h1>
            
                {lista.map((v, i, a) => (
                <ul>
                <li key={v}>{v}</li>
                </ul>
            ))}
            
        </div>
        </div>


    );
};


const numAleatorio = () =>  {
    return Math.floor(Math.random()*100) + 1;
}

const estaEnLista = (lista, num) => {
    return lista.includes(num);
}

export default Listado;