import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav>
        <h2>App Tareas</h2>
        <Link to="/">Inicio</Link>
        <Link to="/create">Crear tarea</Link>
      </nav>
      <main>
        <Outlet />
      </main>

      <footer>2026 - JavaScript Avanzado</footer>
    </>
  );
}
