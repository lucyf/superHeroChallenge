import { useContext } from 'react';
import { dataContext } from '../../context/dataContext';
import '../heroTeam/heroTeam.css';
import SuperHeroCardComponent from '../superheroCard/index';

const HeroTeamComponent = () =>{
    const {addTeam, powerStats} = useContext(dataContext);
    const condition = addTeam === undefined;
    const sortablePowerStats = [];

    for (let stat in powerStats) {
        sortablePowerStats.push([stat, powerStats[stat]]);
    }
    sortablePowerStats.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    

    return(
        <>
        <div className="m-3">
            <div>
                <h3 className="ppal-headings">Tu Liga de Super Heroes</h3>
                <p className="paragraph">Buscá los super heroes que quieras y agregalos a tu equipo. Tu equipo debe tener <strong>6 integrantes</strong>.</p>
            </div>
            <div id="team-box" className="row m-0">
                <div className="col-xs-1 powerStat-set ">
                    <h5 className="text-center secondary-headings">PowerStats</h5>
                    <ul className="list-unstyled mt-2 paragraph">
                    {sortablePowerStats.map((stat)=>{
                    return  <li key={stat.index}>{stat[0]} : {stat[1]}</li>
                        })}
                        </ul>
                </div>
                
                <div className="col team-set">
                        <h5 className="secondary-headings">Mi Equipo</h5>
                <div id="results"className="row justify-content-center m-md-3 m-xs-0">
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