// import { createContext } from "react";
import useCredential from "../hooks/useCredential"

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//     const authValue = useCredential();

//     return (
//         <AuthContext.Provider value={authValue}>
//             {children}
//         </AuthContext.Provider>
//     )
// }


import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {
    const authValue = useCredential();

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

