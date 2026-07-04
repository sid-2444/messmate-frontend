import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {

    const { user } = useAuth();

    if(!user){

        return <Navigate replace to="/login"/>

    }

    return children;

}

export default ProtectedRoute;