


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
      <Route exact path="/" component={Home}/>
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="/coches" component={ListaCoches} />
      <Route exact path="/coche" component={CocheFiltros} />
      <Route exact path="/reserva" component={Reserva} />

      <Redirect to="/404" />
      </Switch>
    </Router>




  )
  
}

export default App;
