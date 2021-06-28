import {createContext, useState} from 'react';


export const dataContext = createContext();

export const DataProvider = ({children})=> {
    const [searchResult, setSearchResult] = useState([])
    const [addTeam, setAddTeam] = useState([])
    const [powerStats, setPowerstats] = useState([])
    const [average, setAverage] = useState([])
    const sum = addTeam.length

const onAddToTeam = (result)=>{

      
        if(isInTeam(result) === -1 && addTeam.length < 6 ){
          setAddTeam([...addTeam,result])
        }
        handlePowerStats(result)  

             
}



 const isInTeam = (hero) => {
        return addTeam.findIndex(h => h.id === hero.id)
  }


  const handleDelete = (hero) =>{
    let removedHero = addTeam.filter(h => h.id !== hero.id); 
    setAddTeam(removedHero);
    deletePowerStats(hero)
  }

  const deleteAll =  ()=>{
    setAddTeam([])
    setPowerstats([{ Inteligencia: 0, Fuerza: 0, Velocidad: 0, Durabilidad: 0, Combate: 0, Poder: 0}])
  }

  const handlePowerStats = (hero)=>{ 
    setPowerstats((prevState) =>
    {return (
         [ {Inteligencia: prevState[0].Inteligencia + parseInt(hero.powerstats.intelligence),
          Fuerza: prevState[0].Fuerza + parseInt(hero.powerstats.strength),
          Velocidad: prevState[0].Velocidad + parseInt(hero.powerstats.speed),
          Durabilidad: prevState[0].Durabilidad + parseInt(hero.powerstats.durability),
          Combate: prevState[0].Combate + parseInt(hero.powerstats.combat),
          Poder: prevState[0].Poder + parseInt(hero.powerstats.power), 

        }])}
      )
    

  }

  const deletePowerStats = (hero)=>{
    setPowerstats((prevState) =>
    {return (
         [ {Inteligencia: prevState[0].Inteligencia - parseInt(hero.powerstats.intelligence),
          Fuerza: prevState[0].Fuerza - parseInt(hero.powerstats.strength),
          Velocidad: prevState[0].Velocidad -  parseInt(hero.powerstats.speed),
          Durabilidad: prevState[0].Durabilidad - parseInt(hero.powerstats.durability),
          Combate: prevState[0].Combate - parseInt(hero.powerstats.combat),
          Poder: prevState[0].Poder - parseInt(hero.powerstats.power)
        }])}
      )
  }


   
    return <dataContext.Provider value= {{searchResult, setAverage, average, deleteAll, setPowerstats, handleDelete, setSearchResult, onAddToTeam, addTeam, powerStats}}>
        {children}
    </dataContext.Provider>

}