// * Modules * //
import { createContext, ReactNode, useContext, useState } from 'react';

// * Exports * //
import useLocalStorage from '@/app/hooks/useLocalStorage';


// * Components * //

type AuthContextData = {
    setJWT: (token: string) => boolean;
    getToken: string
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [getToken, setToken] = useLocalStorage("f495be79bad3d692");

    const setJWT = (token: string): boolean => {
        setToken(token);

        if (getToken == token) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ setJWT, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}
