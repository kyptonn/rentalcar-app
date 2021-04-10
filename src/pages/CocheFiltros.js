import './CocheFiltros.css';
import info from '../icons8-info-24.png'
import alerts from '../icons8-alert-32.png'
import lambo from '../coches/huracan-evo.png'
import gasolina from '../gasolina.png'
import caminar from '../caminar.png'

import propietario from '../portrait-of-white-man-isolated.jpg'
import estrella from '../estrella.png'
import Map from '../components/Map'

const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDk7FVxFaHwdXhP3-gvIsmqK2fjFvnYG28`

function CocheFiltros() {

  




  return (
    <div className="App">
      
      <header className="Container-principal">
        <div className="caja-botones">

            <div className="boton">
                <img src={info}></img>
                <p>Información</p>
            </div>

            <div className="boton">
                <img src={alerts}></img>
                <p>Notificaciones</p>
            </div>

        </div>

        <div className="coche-cercano">
          <h4>MÁS CERCANO</h4>
          <img src={lambo}></img>
          <h2>Lamborghini Huracán</h2>
          
          <div className="caracteristicas">
            <img className="gasolina"src={gasolina}></img>
            <p>228km</p>
            <img className="caminar"src={caminar}></img>
            <p>4 min</p>

            <p className="precio-hora">150€/h</p>
          </div>
        </div>

        <div className="container-pequenio">
          <div className="mapa">
            <Map googleMapURL={mapURL}
            containerElement={<div style={{height:'100%'}}  />}
            mapElement={<div style={{height:'100%'}} />}
            loadingElement= {<p>Cargando</p>}
            />
          
          </div>
          <div className="propietario">
          <p>Roberto</p>
          <img className="imagen-propietario" src={propietario}></img>
          <img className="estrella" src={estrella}></img>
        
          </div>
        </div>


        <div className="filtros">
        <h4>FILTROS GUARDADOS</h4>
        <p>. . .</p>



        </div>
        


           
            
          
       
      </header>
    </div>
  );
}

export default CocheFiltros;
