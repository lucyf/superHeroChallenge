import {createContext, useState} from 'react';


export const dataContext = createContext();

export const DataProvider = ({children})=> {
    const [searchResult, setSearchResult] = useState([])
    const [addTeam, setAddTeam] = useState([])
    const powerstatsBegining = { Inteligencia: 0, Fuerza: 0, Velocidad: 0, Durabilidad: 0, Combate: 0, Poder: 0}
    const [powerStats, setPowerstats] = useState(powerstatsBegining)

    

    const onAddToTeam = (result)=>{
        if(isInTeam(result) === -1 && addTeam.length < 6 ){
          setAddTeam([...addTeam,result])
        }
        // goodOrBad(result)
        handlePowerStats(result)                  
    }

    const isInTeam = (hero) => {
        return addTeam.findIndex(h => h.id === hero.id)
  }

  // const goodOrBad = ()=>{
  //   const alignmentGood = addTeam.map(h => h.biography.alignment === )
  //   return console.log(alignmentGood)
  // }
   
  const handleDelete = (hero) =>{
    let removedHero = addTeam.filter(h => h.id !== hero.id); 
    setAddTeam(removedHero);
    deletePowerStats(hero)
  }

  const handlePowerStats = (hero)=>{

    setPowerstats((prevState) => {
      return(
        {
          Inteligencia: prevState.Inteligencia + parseInt(hero.powerstats.intelligence),
          Fuerza: prevState.Fuerza + parseInt(hero.powerstats.strength),
          Velocidad: prevState.Velocidad + parseInt(hero.powerstats.speed),
          Durabilidad: prevState.Durabilidad + parseInt(hero.powerstats.durability),
          Combate: prevState.Combate + parseInt(hero.powerstats.combat),
          Poder: prevState.Poder + parseInt(hero.powerstats.power)
        }
      )
    })

  }

  const deletePowerStats = (hero)=>{
    setPowerstats((prevState) => {
      return(
        {
          Inteligencia: prevState.Inteligencia - parseInt(hero.powerstats.intelligence),
          Fuerza: prevState.Fuerza - parseInt(hero.powerstats.strength),
          Velocidad: prevState.Velocidad - parseInt(hero.powerstats.speed),
          Durabilidad: prevState.Durabilidad - parseInt(hero.powerstats.durability),
          Combate: prevState.Combate - parseInt(hero.powerstats.combat),
          Poder: prevState.Poder - parseInt(hero.powerstats.power)
        }
      )
    })
  }


   
    return <dataContext.Provider value= {{searchResult,  handleDelete, setSearchResult, onAddToTeam, addTeam, powerStats}}>
        {children}
    </dataContext.Provider>

}