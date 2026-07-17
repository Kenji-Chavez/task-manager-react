import { useNavigate } from "react-router";
import TareaForm from "../components/TareaForm";
import type { Tarea } from "../model/Tarea";
import { createTarea } from "../services/tareaService";

const CrearTareaPage = () => {
    const nav = useNavigate();

    const guardar = async (tarea: Tarea) => {
        await createTarea(tarea);
        nav("/"); 
    }

    return (<>
        <h2>Crear nueva tarea</h2>
        <hr />
        <TareaForm funcion={guardar}/>
    </>);
}

export default CrearTareaPage; 