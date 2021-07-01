import NavbarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Switch,  Route  } from "react-router-dom";
import SuperheroesContainer from './containers/superheroes';
import PresentationComponent from './components/presentation';
import LoginComponent from './components/login';
import { LoginProvider } from './context/loginContext';
import { DataProvider } from './context/dataContext';
import {ModalProvider} from './context/modalContext'
import PrivateRoute from './components/privateRoute';



function App() {
  return (
    <div className="App ">
      <DataProvider>
      <LoginProvider>
      <ModalProvider>
      <BrowserRouter>
         <NavbarComponent/>
              <Switch>
          <div>
                  <Route exact path='/superHeroChallenge' component={PresentationComponent}/>
                  <Route path='/login' component={LoginComponent}/>
                  <Route path='/superheroes' component={SuperheroesContainer}/>
                  {/* <PrivateRoute  component={SuperheroesContainer} path='/superheroes' /> */}
          </div>
              </Switch>   
      </BrowserRouter>
      </ModalProvider>
      </LoginProvider>
      </DataProvider>
    </div>
  );
}

export default App;
