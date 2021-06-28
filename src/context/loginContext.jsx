import {createContext} from 'react';
export const loginContext = createContext();

export const LoginProvider = ({children})=> {

    
    const handleToken = (data) =>{
        localStorage.setItem('token',data)
    }

   
    return <loginContext.Provider value= {{handleToken }}>
        {children}
    </loginContext.Provider>

}