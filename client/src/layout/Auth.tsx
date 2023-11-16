// * Modules * //
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router";

// * Exports * //
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";


// * Components * //
export default function LayoutAuth(): ReactElement {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </React.Fragment>
    );
}