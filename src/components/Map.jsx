import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    Directions
 } from 'react-google-maps'

import coches from '../components/coches.json'


var carURL = window.location
    var carURLsucia = carURL.pathname;
    console.log(carURLsucia)

    var carURLCasiLista= carURLsucia.replace(/%20/, " ")
    console.log(carURLCasiLista)

    var carModelo = carURLCasiLista.replace("/", "")
    console.log(carModelo)



    var list = [];
    for (var i = 0; i <= 11; i++) {
    list.push(i);
    // console.log(list)
     if(carModelo.includes((coches[i].modelo)) ){
        break
    }
   }

   var idCoche=list.length-1
   console.log(idCoche)


  //"lat":41.407, lng":2.180

var posicionCliente = { // Estos datos tendrán que automatizarse con base de datos en un futuro
    lat:41.400,
    lng:2.174
}
var resultadoLat = (coches[idCoche].lat - posicionCliente.lat)/2
var latCentrado = resultadoLat + posicionCliente.lat

var resultadoLng = (coches[idCoche].lng - posicionCliente.lng)/2
var lngCentrado = resultadoLng + posicionCliente.lng


var zoomDinamico = 15;
console.log(resultadoLat)
 if     (resultadoLat >= 0.0005 || resultadoLat <= -0.0005) {zoomDinamico = 14}
 
 else if(resultadoLat >= 0.0045 || resultadoLat <= -0.0045) {zoomDinamico = 14}
 
 else if(resultadoLat >= 0.0075 || resultadoLat <= -0.0075) {zoomDinamico = 13}
 else if(resultadoLat >= 0.012  || resultadoLat <= -0.012)  {zoomDinamico = 12}
 else if(resultadoLat >= 0.02   || resultadoLat <= -0.02)   {zoomDinamico = 11}

console.log(zoomDinamico)



const Map = (props) => {
    



    return (
       
        <div>
            <GoogleMap 
            defaultZoom={zoomDinamico}
            defaultCenter={{ lat:latCentrado, lng:lngCentrado}} //Posición centrado
            />
            
            <Marker 
            position={{lat:posicionCliente.lat, lng:posicionCliente.lng}}  //Posición cliente

            icon="https://i.postimg.cc/WzJY3GYY/circle-1.png"
            
            
            />
             <Marker 
             position={{lat: coches[idCoche].lat, lng: coches[idCoche].lng}} //Posición del coche
            
            
            />
            
        </div>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
