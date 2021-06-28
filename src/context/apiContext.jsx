import {createContext, useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export const apiContext = createContext();

export const ApiProvider = ({children})=> {
const [apiData, setApiData] = useState([])



useEffect(()=>{
    const heroesIds = [275,30,78]
    const data = heroesIds.map((id)=>{
       const dataArray = axios.get('https://www.superheroapi.com/api.php/10225900091910251/' + id).then(result =>{
           console.log(result.data)
        }).catch(console.log)
        return dataArray
    })
    setApiData(data)
},[])


    
    return <apiContext.Provider value= {{apiData}}>
        {children}
    </apiContext.Provider>

}