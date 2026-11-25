import { useState } from "react";

const ContadorLikes = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const aumentarLikes = () => {
        setLikes(likes + 1);
    } 
    
    const aumentarDislikes = () => {
        setDislikes(dislikes + 1);
    }

    return (
        <div>
            <div>
                <button onClick={aumentarLikes}>Like</button>
                <button onClick={aumentarDislikes}>Dislike</button>
            </div>
            <div>
                <h1>Valoración</h1>
                <p>Me gusta {likes} | No me gusta {dislikes}</p>
            </div>
        </div>
    );
}

export default ContadorLikes;