// * Modules * //
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router";

// * Exports * //
import HomePage from "../pages/LandingPage";
import HomeNotFound from "../pages/LandingPage/notFound";


// * Components * //
export default function LayoutDefault(): ReactElement {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomeNotFound />} />
            </Routes>
        </React.Fragment>
    );
}