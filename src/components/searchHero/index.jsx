import { Form, Button, Card} from "react-bootstrap";
import '../searchHero/searchHero.css';
import { useState } from "react";
import axios from 'axios'

const SearchHeroComponent = () =>{

const [searchValue, setSearchValue] = useState('')
const [searchResult, setSearchResult] = useState([])
const condition = searchResult !== undefined && searchValue !== ''


const catchInput = (e)=>{
    let trimedSearch = e.trim()
    setSearchValue(trimedSearch.toLowerCase());  
    
}

const searchHero = ()=>{
    if(searchValue !== ''){
        axios.get('https://www.superheroapi.com/api.php/10225900091910251/search/' + searchValue).then(result =>{
            setSearchResult(result.data.results)
         }).catch(console.log)
    }else{
        alert('Introduce el nombre de un superheroe!')
    }

}


    return(
        <>
        <div>
            <div className="text-left p-2 ml-2 mt-2">
                <h2>Arma tu Equipo</h2>
                <h5>Busca los integrantes de tu Liga</h5>
            </div>
            
            <div className="ml-2 mt-2 text-left" id="search-form">
                <Form inline className="m-2">
                    <Form.Control className="search-input" type="text" value={searchValue} placeholder="Nombre del Superheroe" onChange={(e)=>{catchInput(e.target.value)}} />
                    <Button className="ml-1" variant="outline-success" onClick={searchHero} >Search</Button>
                </Form>
            </div>
            <hr/>
            <div id="results"className="row justify-content-center m-3">
               {condition ? <ul className="row justify-content-center">
                {searchResult.map((result) => {
                   return <li className="list-unstyled p-3" key={result.id}>
                   <Card style={{ width: '15rem' }} key={result.id} className="p-3 mr-2">
                   <Card.Img variant="top" src={result.image.url} />
                   <Card.Body>
                     <Card.Title>{result.name}</Card.Title>
                     <Button variant="danger" className="mr-2 mb-2 p-1">Agregar al Equipo</Button>
                     <Button variant="primary" className="mr-2 mb-2 p-1">Ver detalles</Button>
                   </Card.Body>
                 </Card> </li> }) } 
                 </ul> : <h6 style={{opacity:0.5}}>Busca un superheroe disponible.</h6> }
            </div>
        </div>
        </>
    )
}

export default SearchHeroComponent;