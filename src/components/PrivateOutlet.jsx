import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


export default function PrivateOutlet() {

    const { user } = useAuthContext();
    const location = useLocation();

    return user?.email ? (<Outlet />) : (<Navigate to="/login" state={{
        from: location /*Home */
    }} />)
    
}
