import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([]);

export function MenuRoutes(): JSX.Element {
    return <RouterProvider router={router} />;
}
