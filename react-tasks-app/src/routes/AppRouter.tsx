import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ListadoPage from "../pages/ListadoPage";
import VerDetallePage from "../pages/VerDetallePage";
import CrearTareaPage from "../pages/CrearTareaPage";
import EditarTareaPage from "../pages/EditarTareaPage";
import Error404Page from "../pages/Error404Page";


export const AppRouter = createBrowserRouter([
    {
        path: "/", Component: MainLayout, children: [
            { index: true, Component: ListadoPage },
            { path: "tasks/:id", Component: VerDetallePage },
            { path: "create", Component: CrearTareaPage },
            { path: "edit/:id", Component: EditarTareaPage },
            { path: "*", Component: Error404Page }
        ]
    }
])