import { createContext, useState } from "react";

export const AuthContext = createContext({
    user: null
})

export const AuthContextProvider = ({ children }: { children: any}) => {
    const [ user, setUser ] = useState(null);

    return (
        <AuthContext.Provider value={{user}}>
            { children }
        </AuthContext.Provider>
    )
}