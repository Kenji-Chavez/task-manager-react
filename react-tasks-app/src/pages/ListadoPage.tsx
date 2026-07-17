import { Link } from "react-router";
import { useTareas } from "../hooks/useTareas";
import { deleteTareaById } from "../services/tareaService";

const ListadoPage = () => {
  const { tareas, loading, cargarDatos } = useTareas();

  if (loading) {
    return <>Cargando...</>;
  }

  if (tareas.length === 0) {
    return <>No hay tareas</>;
  }

  const eliminarTarea = async (id: number) => {
    if (!confirm("Desea eliminar la tarea?")) return;

    await deleteTareaById(id);
    await cargarDatos();
  };

  return (
    <>
      <h2>Listado de tareas</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Título </th>
            <th>Estado</th>
            <th>Detalle</th>
            <th colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.status}</td>
              <td>
                <Link to={`/tasks/${t.id}`}>
                  <button>Ver detalle</button>
                </Link>
              </td>
              <td>
                <Link to={`/edit/${t.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button onClick={() => eliminarTarea(t.id!)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListadoPage;
