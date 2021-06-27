import { useState } from "react";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { dataContext } from "../../context/dataContext";
import { ModalContext } from "../../context/modalContext";
import ModalDetailComponent from "../modalDetail";

const SuperHeroCardComponent = ({hero})=>{
    const {handleDelete} = useContext(dataContext)
    const {setModalShow, modalShow, handleButton} = useContext(ModalContext)
   
    
    return(
        <>
        <Card style={{ width: '15rem' }} key={hero.id} className="p-3 mr-2">
                   <Card.Img variant="top" src={hero.image.url} />
                   <Card.Body>
                     <Card.Title>{hero.name}</Card.Title>
                     <Card.Text>
                        <ul className="pl-2">
                            <li>Inteligencia: {hero.powerstats.intelligence}</li>
                            <li>Fuerza: {hero.powerstats.strength} </li>
                            <li>Velocidad: {hero.powerstats.speed} </li>
                            <li>Durabilidad: {hero.powerstats.durability} </li>
                            <li>Combate: {hero.powerstats.combat} </li>
                            <li>Poder: {hero.powerstats.power} </li>
                        </ul>
                     </Card.Text>
                     <div className="row ">
                        <Button variant="outline-primary" className="mr-2 mb-2 p-1" onClick={() => handleButton(hero)}>Ver detalles</Button>
                        <Button variant="link" className="mr-2 mb-2 p-1" onClick={()=>{handleDelete(hero)}}>Eliminar</Button>
                     </div>
                   </Card.Body>
        <ModalDetailComponent 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        </Card>
        </>
    )
}

export default SuperHeroCardComponent;