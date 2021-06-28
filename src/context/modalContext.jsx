import {createContext, useState} from 'react';


export const ModalContext = createContext();

export const ModalProvider = ({children})=> {
    const [modalShow, setModalShow] = useState(false);
    const [saveItem, setSaveItem] = useState()
   
    const handleButton = (hero)=>{
        setSaveItem(hero)
        setModalShow(true)
    }
    


    return <ModalContext.Provider value={{modalShow, setModalShow, handleButton, saveItem}} >
    {children}
</ModalContext.Provider>
}