// * Modules * //
import DashboardNotFound from "../pages/Dashboard/notFound";
import DashboardLayout from "../pages/Dashboard/Layout";
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard/Init";

// * Exports * //


// * Components * //
export default function LayoutPainel(): ReactElement {
    return (
        <React.Fragment>
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<DashboardNotFound />} />
                </Routes>
            </DashboardLayout>
        </React.Fragment>
    );
}