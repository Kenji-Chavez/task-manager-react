import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import type { Tarea } from "../model/Tarea";
import { getTareaById } from "../services/tareaService";

const VerDetallePage = () => {
    const id = Number(useParams().id);
    const nav = useNavigate();

    const objTarea: Tarea = {
        title: "",
        description: "",
        status: "pending"
    };

    const [tarea, setTarea] = useState<Tarea>(objTarea);
    const [loading, setLoading] = useState(true);

    const cargarDato = async (id: number) => {
        const data = await getTareaById(id);
        setTarea(data);
    };

    useEffect(() => {
        cargarDato(id).finally(() => setLoading(false));
    }, []);

    if (loading) { return <>Cargando...</>; }

    return (<>
        <h2>Detalle de tarea #{id}</h2>
        <hr />
        <div>
            <p><strong>Id:</strong> {tarea.id}</p>
            <p><strong>Título:</strong> {tarea.title}</p>
            <p><strong>Descripción:</strong> {tarea.description}</p>
            <p><strong>Estado:</strong> {tarea.status}</p>
        </div>
        <hr />
        
        <Link to={`/edit/${id}`}>
            <button>Editar</button>
        </Link>
        
        <button onClick={() => nav("/")}>Volver</button>
    </>);
}

export default VerDetallePage;