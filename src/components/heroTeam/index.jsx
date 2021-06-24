import '../heroTeam/heroTeam.css'

const HeroTeamComponent = () =>{
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
                        <li className="mb-2">Inteligencia: </li>
                        <li className="mb-2">Fuerza: </li>
                        <li className="mb-2">Velocidad: </li>
                        <li className="mb-2" >Durabilidad: </li>
                        <li className="mb-2">Combate: </li>
                    </ul>
                </div>
                <div className="col team-set">
                        <h5>Mi Equipo</h5>
                </div>
            </div>

        </div>
        <hr />
        </>
    )
}

export default HeroTeamComponent;