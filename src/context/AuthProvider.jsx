import { createContext } from "react";
import useCredential from "../hooks/useCredential"

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const authValue = useCredential();
    
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}
