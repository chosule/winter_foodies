import { useEffect, useState } from "react";

export function useAuth() {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("accessToken");

    useEffect(() =>{
        if(token){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    } ,[])
    
    return {isLoggedIn, setIsLoggedIn};
}

export default useAuth;