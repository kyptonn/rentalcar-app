


import  { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import {NotFoundPage} from './pages/404';
import ListaCoches from './pages/ListaCoches'
import CocheFiltros from './pages/CocheFiltros'
import {Reserva} from './pages/Reserva'


function App() {



  return (
    <Router>
      <Switch>
      <Route exact path="/rentalcar-app/" component={Home}/>
      <Route exact path="/rentalcar-app/404" component={NotFoundPage} />
      <Route exact path="/rentalcar-app/coches" component={ListaCoches} />
      <Route exact path="/rentalcar-app/coche" component={CocheFiltros} />
      <Route exact path="/rentalcar-app/reserva" component={Reserva} />

      <Redirect to="/404" />
      </Switch>
    </Router>




  )
  
}

export default App;
