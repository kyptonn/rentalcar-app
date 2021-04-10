import './Home.css';
import Navbar from '../components/Navbar.jsx'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="overlay">
        <h1>PREMIUM<br></br>RENTALS</h1>
        <p>
          Alquiler de Coches Exclusivos
        </p>
        <button> 
          <Link to="/coches">Entrar</Link>
          {/* <a className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer">
            Entrar
          </a> */}
        </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
