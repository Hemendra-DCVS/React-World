import { Navigate } from "react-router-dom";
import { useAuth } from "./Data/AuthContext";

export function Protected({children}){
    //Authorized access to the routes
    //check if user is logged in, if not - ask him to login to the account
    
    const { user } = useAuth();

    if(!user){
        return <Navigate to="/login" replace/>
    }else{
        return children;
    }



}