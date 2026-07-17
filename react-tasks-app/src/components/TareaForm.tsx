import { useState, type SyntheticEvent } from "react";
import type { Tarea } from "../model/Tarea";

interface Props {
    datos?: Tarea,
    funcion: (tarea: Tarea) => void
}

const TareaForm = ({ datos, funcion }: Props) => {

    const [title, setTitle] = useState(datos?.title || "");
    const [description, setDescription] = useState(datos?.description || "");
    const [status, setStatus] = useState(datos?.status || "pending");

    const enviarForm = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        funcion({ title, description, status });
    };


    return (<>
        <form onSubmit={enviarForm} className="form-container">
            <input type="text" value={title} placeholder="Título "
                onChange={(e) => setTitle(e.target.value)} />
                
            <input type="text" value={description} placeholder="Descripción"
                onChange={(e) => setDescription(e.target.value)} />

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">pending</option>
                <option value="done">done</option>
            </select>

            <button>Guardar</button>
        </form>
    </>);
}

export default TareaForm;