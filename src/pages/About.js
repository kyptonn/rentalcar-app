import '../App.css';
import Navbar from '../components/Navbar'

function About() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="overlay">
       <h1>PREMIUM<br></br>RENTALS</h1>
        <p>
          Alquiler de Coches Exclusivos
        </p>
       <button> <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </a>
        </button>
        </div>
      </header>
    </div>
  );
}

export default About;
