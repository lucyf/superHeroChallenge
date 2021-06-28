
import { useContext } from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { dataContext } from '../../context/dataContext';




const NavbarComponent = () =>{
  const {deleteAll} = useContext(dataContext)
  const history = useHistory()
  const condition = localStorage.length !== 0
   

  const handleLogOut = ()=>{
    deleteAll()
    localStorage.clear()
    history.push('/')
  }


    return(
        <>
        <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SuperHero</Navbar.Brand>

    <Nav className="ml-auto" >
       
       {condition ? <Button className="ml-3" onClick={handleLogOut}>Log Out</Button>
    : <Link to={`/login`}><Button  variant="warning">Log In</Button>
    </Link> }
    </Nav>
  </Navbar>
        </div>
        </>

    )
}

export default NavbarComponent;