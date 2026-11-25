import { useState } from "react";

const ContadorLimite = () => {
    const [numero, setNumero] = useState(0);

    // Incrementa el valor en 1
    const incrementarNumero = () => {
        setNumero(numero +1);
    }
    // Disminuye el valor en 1
    const decrementarNumero = () => {
        setNumero(numero-1);
    }

    return (
        <div>
            <div>
                <button onClick={incrementarNumero} disabled={numero >= 10}>Incrementar</button>
                <button onClick={decrementarNumero} disabled={numero<=-5}>Decrementar</button>
            </div>
            <div>
                <h1>{numero}</h1>
            </div>
            

        </div>
    );
}

export default ContadorLimite;