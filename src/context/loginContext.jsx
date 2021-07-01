import {createContext} from 'react';
export const loginContext = createContext();

export const LoginProvider = ({children})=> {

    
    const handleToken = (data) =>{
        localStorage.setItem('token',data)
    }

    const isLogin = localStorage.length !== 0
    console.log(isLogin)
   
    return <loginContext.Provider value= {{handleToken, isLogin }}>
        {children}
    </loginContext.Provider>

}