import { useEffect, useState } from "react";
import type { Tarea } from "../model/Tarea";
import { getTareas } from "../services/tareaService";

export const useTareas = () => {
    const [tareas, setTareas] = useState<Tarea[]>([]);
    const [loading, setLoading] = useState(true);

    const cargarDatos = async () => {
        const data = await getTareas();
        setTareas(data);
    };

    useEffect(()=>{
        cargarDatos().finally(()=>setLoading(false));
    },[]);

    return{ tareas, loading, cargarDatos };
};

