// * Modules * //
import { BrowserRouter } from "react-router-dom";

// * Exports * //
import { AuthProvider } from "../Context/auth.context";
import { AuthRoutes } from "../Routes/routes";
import { GlobalStyle } from "./Theme/Global";

export function App() {
    return (
        <AuthProvider>
            <GlobalStyle />
            <BrowserRouter>
                <AuthRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}
