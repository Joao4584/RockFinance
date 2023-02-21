import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "../Layout/Menu";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Menu />,
    },
    {
        path: "/auth",
        element: <div>Acesso Negado</div>,
    },
]);

export function AuthRoutes(): JSX.Element {
    return <RouterProvider router={router} />;
}
