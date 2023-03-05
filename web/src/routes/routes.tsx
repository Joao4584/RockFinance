import { Routes, Route, Link, Outlet } from "react-router-dom";

import { Menu } from "../Layout/Menu";

export function AuthRoutes(): JSX.Element {
    return (
        <Routes>
            <Route path="*" element={<Menu />} />
            <Route path="/auth" element={<div>Acesso Negado</div>} />
        </Routes>
    );
}
