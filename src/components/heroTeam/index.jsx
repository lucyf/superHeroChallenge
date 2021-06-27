import { useContext } from 'react';
import { dataContext } from '../../context/dataContext';
import '../heroTeam/heroTeam.css'
import SuperHeroCardComponent from '../superheroCard.jsx';

const HeroTeamComponent = () =>{
    const {addTeam, powerStats} = useContext(dataContext)
    const condition = addTeam === undefined
    console.log(powerStats)

    return(
        <>
        <div className="m-3">
            <div>
                <h3>Tu Liga de Super Heroes</h3>
                <p>Buscá los super heroes que quieras y agregalos a tu equipo. Tu equipo debe tener <strong>6 integrantes</strong>.</p>
            </div>
            <div id="team-box" className="row m-0">
                <div className="col-xs-2 powerStat-set ">
                    <h5 className="text-center">PowerStats</h5>
                    <ul className="list-unstyled mt-2">
                        {/* <li className="mb-2">Inteligencia: {intelligence} </li>
                        <li className="mb-2">Fuerza: {strength}</li>
                        <li className="mb-2">Velocidad: {speed} </li>
                        <li className="mb-2" >Durabilidad: {durability} </li>
                        <li className="mb-2">Combate: {combat} </li>
                        <li className="mb-2">Poder: {power} </li> */}
                        <li>Inteligencia: </li>
                        <li>Fuerza: </li>
                    </ul>
                </div>
                <div className="col team-set">
                        <h5>Mi Equipo</h5>
                <div id="results"className="row justify-content-center m-3">
                   {!condition ? <ul className="row justify-content-center">
                    {addTeam.map((hero) => {
                    return <li className="list-unstyled p-3" key={hero.id}>
                        <SuperHeroCardComponent hero={hero}/>
                        </li> })} 
                    </ul> : <p> Tu equipo está vacío. Elige 6 super heroes.</p> }
                </div>
                </div>
            </div>

        </div>
        <hr />
        </>
    )
}

export default HeroTeamComponent;