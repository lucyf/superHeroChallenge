import './App.css';
import NavbarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter,Switch,  Route } from "react-router-dom";
import SuperheroesContainer from './containers/superheroes';
import { LoginProvider } from './context/loginContext';
import PresentationComponent from './components/presentation';
import LoginComponent from './components/login';
import { DataProvider } from './context/dataContext';



function App() {
  return (
    <div className="App ">
      <DataProvider>
      <LoginProvider>
      <BrowserRouter>
         <NavbarComponent/>
              <Switch>
          <div>
                  <Route exact path='/' component={PresentationComponent}/>
                  <Route path='/login' component={LoginComponent}/>
                  <Route path='/superheroes' component={SuperheroesContainer}/>
          </div>
              </Switch>   
      </BrowserRouter>
      </LoginProvider>
      </DataProvider>
    </div>
  );
}

export default App;
