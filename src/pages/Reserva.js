import React from 'react'
import Map from '../components/Map'
import './Reserva.css'
import gasolina from '../gasolina-blanco.png'
import caminar from '../caminar-blanco.png'

import lambo from '../coches/lamborghinireserva.png'

const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDk7FVxFaHwdXhP3-gvIsmqK2fjFvnYG28`


export const Reserva = () => {
    return (
        <div className="container-maestro">
            <div className="mapa">
               
                <Map googleMapURL={mapURL}
                containerElement={<div style={{height:'100%'}}  />}
                mapElement={<div style={{height:'100%'}} />}
                loadingElement= {<p>Cargando</p>}
                />
            </div>
            <div className="detalles">
                <div className="descripcion">
                            <h2>Lamborghini</h2>
                            <div className="estado">
                                <p><img className="gasolina"src={gasolina}></img>300km <img className="caminar"src={caminar}></img>4min</p>
                            </div>
                            <img className="foto-coche" src={lambo}></img>
                </div>

                <div className="caracteristicas">
                    <div className="info">
                        <h3>Características</h3>
                        <div className="precio">
                            <h2>150€ </h2><p>/ hora</p>
                        </div>
                    </div>



                </div>








            </div>
        </div>
    )
}
