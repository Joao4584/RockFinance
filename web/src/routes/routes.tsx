import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Auth } from "../Layout/Auth";

import { Menu } from "../Layout/Menu";

export function AuthRoutes(): JSX.Element {
    return (
        <Routes>
            <Route path="*" element={<Menu />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
}
