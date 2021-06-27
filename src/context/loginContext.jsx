import { useEffect } from 'react';
import {createContext, useState} from 'react';
import { useHistory } from "react-router-dom";



export const loginContext = createContext();

export const LoginProvider = ({children})=> {
    const [token, setToken] = useState('')

    
    const handleToken = (data) =>{
        localStorage.setItem('token',data)
        setToken(data)
    }

   
    return <loginContext.Provider value= {{handleToken, token,setToken }}>
        {children}
    </loginContext.Provider>

}