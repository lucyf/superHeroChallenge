import {createContext, useState} from 'react';


export const dataContext = createContext();

export const DataProvider = ({children})=> {
    const [searchResult, setSearchResult] = useState([])
    const [addTeam, setAddTeam] = useState([])
    const [powerStats, setPowerstats] = useState()



const onAddToTeam = (result)=>{

      
        if(isInTeam(result) === -1 && addTeam.length < 6 && ((result.biography.alignment === "good" && !isTeamGoodEnough()) || (result.biography.alignment === "bad" && !isTeamBadEnough()))){

          setAddTeam([...addTeam,result])
        }else{
          alert("Asegurate de no repetir superheroes, que el equipo no sea mas de 6 y tener 3 buenos y 3 malos.")
        }
        handlePowerStats(result)  

             
}

const isTeamBadEnough = ()=>{
     const bads = addTeam.filter(hero => hero.biography.alignment === "bad");
     return bads.length >= 3;
}
const isTeamGoodEnough = ()=>{
  const goods = addTeam.filter(hero => hero.biography.alignment === "good");
  return goods.length >= 3;
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
    setPowerstats({ Inteligencia: 0, Fuerza: 0, Velocidad: 0, Durabilidad: 0, Combate: 0, Poder: 0})
  }

  const handlePowerStats = (hero)=>{ 

    setPowerstats((prevState) =>
    {return (
          {Inteligencia: prevState.Inteligencia + (parseInt(hero.powerstats.intelligence) || 0),
          Fuerza: prevState.Fuerza + (parseInt(hero.powerstats.strength) || 0),
          Velocidad: prevState.Velocidad + (parseInt(hero.powerstats.speed) || 0),
          Durabilidad: prevState.Durabilidad + (parseInt(hero.powerstats.durability) || 0),
          Combate: prevState.Combate + (parseInt(hero.powerstats.combat) || 0),
          Poder: prevState.Poder + (parseInt(hero.powerstats.power) || 0), 
        })}
      )
  }

  const deletePowerStats = (hero)=>{
    setPowerstats((prevState) =>
    {return (
          {Inteligencia: prevState.Inteligencia -  (parseInt(hero.powerstats.intelligence) || 0),
          Fuerza: prevState.Fuerza - (parseInt(hero.powerstats.strength) || 0),
          Velocidad: prevState.Velocidad -  (parseInt(hero.powerstats.speed) || 0),
          Durabilidad: prevState.Durabilidad - (parseInt(hero.powerstats.durability) || 0),
          Combate: prevState.Combate - (parseInt(hero.powerstats.combat) || 0),
          Poder: prevState.Poder - (parseInt(hero.powerstats.power) || 0)
        }
        )}
      )
  }


   
    return <dataContext.Provider value= {{searchResult, deleteAll, setPowerstats, handleDelete, setSearchResult, onAddToTeam, addTeam, powerStats}}>
        {children}
    </dataContext.Provider>

}