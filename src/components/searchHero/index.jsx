import { Form, Button, Card} from "react-bootstrap";
import '../searchHero/searchHero.css';
import { useState } from "react";
import axios from 'axios'

const SearchHeroComponent = () =>{

const [searchValue, setSearchValue] = useState('')
const [searchResult, setSearchResult] = useState([])

const catchInput = (e)=>{
    let trimedSearch = e.trim()
    setSearchValue(trimedSearch.toLowerCase());  
    
}

const searchHero = ()=>{
    axios.get('https://www.superheroapi.com/api.php/10225900091910251/search/' + searchValue).then(result =>{
           setSearchResult(result.data.results)
        }).catch(console.log)
}

console.log(searchResult)

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
            <div id="results"className="row m-3">
               {searchResult.map((result) => {
                   return <Card style={{ width: '18rem' }} key={result.id} className="p-3 m-3">
                   <Card.Img variant="top" src={result.image.url} />
                   <Card.Body>
                     <Card.Title>{result.name}</Card.Title>
                     <Button variant="primary">Agregar al Equipo</Button>
                   </Card.Body>
                 </Card>
               
                }) }
            </div>
        </div>
        </>
    )
}

export default SearchHeroComponent;