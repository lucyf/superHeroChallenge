import {createContext, useState} from 'react';


export const loginContext = createContext();

export const LoginProvider = ({children})=> {
    const [token, setToken] = useState('')

   
    return <loginContext.Provider value= {{setToken, token}}>
        {children}
    </loginContext.Provider>

}