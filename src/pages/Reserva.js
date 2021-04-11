import React from 'react'
import Map from '../components/Map'
import './Reserva.css'
import gasolina from '../gasolina-blanco.png'
import caminar from '../caminar-blanco.png'

import motor1 from '../motor1.png'
import motor2 from '../motor2.png'
import aceleracion1 from '../aceleracion1.png'
import aceleracion2 from '../aceleracion2.png'

import lambo from '../coches/lamborghinireserva.png'




import coches from '../components/coches.json'
import { findDOMNode } from 'react-dom'
import Navbar from '../components/Navbar'




const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDk7FVxFaHwdXhP3-gvIsmqK2fjFvnYG28`



var windowLocation= window.location   /* .find(element => element == coches.modelo); */
var cocheURL = windowLocation.pathname

   // console.log(cocheURL);
   //car = coches[4].modelo             (((( = "Gran Turismo"   ))))
   // var cocheFinal = car.replace(/ /g, "")


  

var list = [];
for (var i = 0; i <= 11; i++) {
    list.push(i);
    // console.log(list)
    if(cocheURL.includes((coches[list.length-1].modelo).replace(" ", "%20")) ){
        break
    }
}
console.log(list)

console.log(cocheURL)
var numeroCoche = list.length-1
console.log("numero coche de la URL "+numeroCoche)
console.log(coches[numeroCoche].modelo)


export const Reserva = () => {

    console.log(numeroCoche)

    return (
        
        <div className="container-maestro animate__animated animate__fadeIn animate__fast">
             <Navbar />
            
            <div className="mapa">

                <Map 
                googleMapURL={mapURL}
                containerElement={<div style={{height:'100%'}}  />}
                mapElement={<div style={{height:'100%'}} />}
                loadingElement= {<p>Cargando</p>}
                />
            </div>
            <div className="detalles animate__animated animate__slideInUp">
                
                <div className="descripcion">
                            <h2> {coches[numeroCoche].marca}</h2>
                            <h3> {coches[numeroCoche].modelo}</h3>
                            <div className="estado">
                                <p><img className="gasolina"src={gasolina}></img>300km <img className="caminar"src={caminar}></img>4min</p>
                            </div>
                            <img className="foto-coche" src={coches[numeroCoche].imagen}></img>
                </div>


                <div className="caracteristicas">

                    <div className="div-izquierdo">
                        <div className="info">
                            <h3>Características</h3>
                            <div className="aceleracion">
                                <h4>{coches[numeroCoche].aceleracion}</h4>
                                <img src={aceleracion1}></img>
                            </div>
                            <div className="potencia">
                                <h4>{coches[numeroCoche].caballos}</h4>
                            
                                <img src={motor1}></img>
                            </div>
                            <div className="precio">
                                <h2>{coches[numeroCoche].precio}€ </h2><p>/ hora</p>
                            </div>
                        </div>
                    </div>

                    <div className="div-derecho">
                        <div className="boton-reserva">
                            <button>Reservar</button>
                            <p>Comprobar <br></br>disponibilidad</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
