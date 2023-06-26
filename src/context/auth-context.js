import { createContext, useState } from "react";
import { signupService } from "../services/Authservice";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState("")
    const signupHandler = async({firstName, lastName, username, password}) =>{
        try{
            const response = await signupService(firstName, lastName, username, password);
            console.log(response);
        }
        catch{
            console.log("error from signup component")
        }
    }

    return(
        <AuthContext.Provider value={{signupHandler}}>
            {children}
        </AuthContext.Provider>
    )
}