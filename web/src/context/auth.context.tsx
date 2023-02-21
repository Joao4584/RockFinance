import React, { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }: any) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
