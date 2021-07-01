import SearchHeroComponent from "../components/searchHero";
import HeroTeamComponent from "../components/heroTeam";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import { useEffect } from "react";

const SuperheroesContainer = () =>{
    const {setPowerstats} = useContext(dataContext)
    useEffect(()=>{
        setPowerstats({ Inteligencia: 0, Fuerza: 0, Velocidad: 0, Durabilidad: 0, Combate: 0, Poder: 0, Peso: 0, Estatura:0})
    },[])
    
    return(
        <>
        <HeroTeamComponent/>
        <SearchHeroComponent/>
        </>
    )
}
export default SuperheroesContainer;