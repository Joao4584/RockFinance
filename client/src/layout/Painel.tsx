// * Modules * //
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router";

// * Exports * //
import DashboardNotFound from "../pages/Dashboard/notFound";
import DashboardLayout from "../pages/Dashboard/Layout";
import { Dashboard } from "../pages/Dashboard/Init";
import { CategoriasPage } from "@/pages/Dashboard/Categorias";


// * Components * //
export default function LayoutPainel(): ReactElement {
    return (
        <React.Fragment>
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="categorias" element={<CategoriasPage />} />
                    <Route path="*" element={<DashboardNotFound />} />
                </Routes>
            </DashboardLayout>
        </React.Fragment>
    );
}