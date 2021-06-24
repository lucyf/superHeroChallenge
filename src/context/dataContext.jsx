import {createContext, useState} from 'react';


export const dataContext = createContext();

export const DataProvider = ({children})=> {
    const [searchResult, setSearchResult] = useState([])
    const [addTeam, setAddTeam] = useState([])

    const onAddToTeam = (result)=>{
        if(isInTeam(result) === -1){
            setAddTeam([...addTeam,result])
        }
               
    }
    console.log(addTeam)

    const isInTeam = (hero) => {
        return addTeam.findIndex(h => h.id === hero.id)
  }


   
    return <dataContext.Provider value= {{searchResult, setSearchResult, onAddToTeam}}>
        {children}
    </dataContext.Provider>

}