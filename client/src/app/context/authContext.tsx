// * Modules * //
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// * Exports * //
import useLocalStorage from '@/app/hooks/useLocalStorage';
import InitLoadingApp from '@/components/Loading/InitApp';


// * Components * //

type AuthContextData = {
    setToken: (token: string) => void;
    getToken: string;
    userInfo: any;
    setUserInfo: (arr: any) => void;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [getToken, setToken] = useLocalStorage(import.meta.env.JWT_DEFAULT_LOCAL);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {


    }, []);

    return (
        <AuthContext.Provider value={{ setToken, getToken, setUserInfo, userInfo }}>
            <>{children}</>
        </AuthContext.Provider>
    );
}
export { AuthContext, AuthProvider };
