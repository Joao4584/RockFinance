// * Modules * //
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// * Exports * //
import "tailwindcss/tailwind.css";
import "./app/globals.css";
import LayoutPainel from './layout/Painel';
import LayoutAuth from './layout/Auth';
import LayoutDefault from './layout/Default';
import { AuthProvider } from './app/context/authContext';

// * Components * //
const container: any = document.getElementById('APP');
const root = createRoot(container);

root.render(<React.Fragment>
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/dashboard/*" element={<LayoutPainel />} />
                <Route path="/auth/*" element={<LayoutAuth />} />
                <Route path="*" element={<LayoutDefault />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
</React.Fragment>);