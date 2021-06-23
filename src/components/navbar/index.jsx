import { useContext } from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { loginContext } from '../../context/loginContext';



const NavbarComponent = () =>{
  const {token, setToken} = useContext(loginContext)
  const history = useHistory()
  const condition = token.length !== 0


  const handleLogOut = ()=>{
    setToken('')
    localStorage.clear()
    history.push('/')
  }

    return(
        <>
        <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SuperHero</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#features">Nosotros</Nav.Link>
      
    </Nav>
    <Nav>
       
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