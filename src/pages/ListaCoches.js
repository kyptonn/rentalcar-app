import './ListaCoches.css';
import Navbar from '../components/Navbar.jsx'
import CajaCoches from '../components/CajaCoches'


import coches from '../components/coches.json'

function ListaCoches() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      <h1>Vehículos Disponibles</h1>
          <div className="container-cajas">
            
            {
              coches.map((coche) => <CajaCoches 
              marca={coche.marca} imagen={coche.imagen} 
              aceleracion={coche.aceleracion} 
              precio={coche.precio} modelo={coche.modelo} 
              caballos={coche.caballos} 
              clasificacion={coche.clasificacion}
              precioDia={coche.precioDia}
              />)
            }
             
            

            {/* <CajaCoches 
              nombre="ferrari"
              image="imagen"
              aceleracion="0-100 3.7s"
              /> */}

           
           
          
          </div>
      </header>
    </div>
  );
}

export default ListaCoches;
