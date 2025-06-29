import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export default function useAuthContext() {
    return useContext(AuthContext);
}
