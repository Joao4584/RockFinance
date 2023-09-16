'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
};

type AuthContextData = {
    user: User | null;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const signIn = (email: string, password: string) => {
        // Implemente aqui a lógica de autenticação
        // Verifique o email e a senha e, se válidos, defina o usuário no estado.
        const authenticatedUser: User = {
            id: '1',
            name: 'Exemplo',
            email: 'exemplo@email.com',
        };
        setUser(authenticatedUser);
    };

    const signOut = () => {
        // Implemente aqui a lógica de saída (logout)
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
