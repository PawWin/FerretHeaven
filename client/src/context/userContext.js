import axios from "axios";
import {createContext, useState, useEffect, useContext} from "react";

export const UserContext = createContext({})

export const useUser = ()=>{
    return useContext(UserContext)
}
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        if(!user){
            axios.get('/profile').then(({data})=>{
                setUser(data)
            })
        }
    },[])
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

