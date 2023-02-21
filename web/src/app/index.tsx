import { AuthProvider } from "../Context/auth.context";
import { AuthRoutes } from "../Routes/auth.routes";
import { GlobalStyle } from "./Theme/Global";

export function App() {
    return (
        <AuthProvider>
            <GlobalStyle />
            <AuthRoutes />
        </AuthProvider>
    );
}
