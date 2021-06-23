import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../presentation/presentation.css'

const PresentationComponent = () =>{
    return(
        <>
        <div className=" background text-center msg" >

                <h1 className="font-impact">Armá tu propia liga de Superheroes</h1>
                <h5>Te invitamos a que armes tu propia liga de Superheroes, eligiendo entre ellos los que más te parece que harían buen equipo. <br/> Tené en cuenta sus características, combinalas adecuadamente y presenta el mejor equipo. </h5>
                <div>
                   <Link to={`/login`}>
                        <Button className="m-2" >Iniciar Sesión</Button>
                   </Link> 
                </div>

        </div>
        </>
    )
}
export default PresentationComponent;