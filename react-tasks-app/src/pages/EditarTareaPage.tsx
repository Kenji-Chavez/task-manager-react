import { useNavigate, useParams } from "react-router";
import type { Tarea } from "../model/Tarea";
import { getTareaById, updateTarea } from "../services/tareaService";
import { useEffect, useState } from "react";
import TareaForm from "../components/TareaForm";

const EditarTareaPage = () => {

    const id = Number(useParams().id);
    const objtarea : Tarea = {
        title: "",
        description: "",
        status: ""
    } 

    const [tarea, setTarea] = useState<Tarea>(objtarea); 
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    const cargarDato = async (id: number) => {
        const data = await getTareaById(id);
        setTarea(data);
    };

    useEffect(()=>{
        cargarDato(id).finally(()=>setLoading(false));
    },[]);

    if(loading) {return <>Cargando...</>}

    const actualizar = async (tarea: Tarea) =>{
        await updateTarea(id, tarea);
        nav("/");
    }

    return(<>
        <h2>Editar tarea #{id}</h2>
        <TareaForm datos={tarea} funcion={actualizar}/>
    </>);
}

export default EditarTareaPage;