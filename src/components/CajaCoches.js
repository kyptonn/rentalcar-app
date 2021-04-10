import numeral from 'numeral'
import React from 'react'
import './CajaCoches.css'
import {Link} from 'react-router-dom'


var cocheModelo;
var modeloFinalURL;

export default class CajaCoches extends React.Component {
    // constructor(props){
    //    super(props);
    //    this.state = {
    //        nombre: props.nombre,
    //        imagen: props.imagen,
    //        aceleracion: props.aceleracion
    //    }
    // } -> si lo usamos así, hay que cambiar abajo de "this.props" a "this.state"


    // cocheModelo = this.props.modelo;
    // modeloFinalURL= cocheModelo.replace(/ /g, "");

      



    render(){
        return (
            <div className="caja-pequenia animate__animated animate__fadeIn animate__slow">
                <div className="caja-izquierda">
                    <h2>{this.props.marca}</h2>
                    <h3>{this.props.modelo}</h3>

                    <p>{this.props.caballos}</p>
                    <p>{this.props.aceleracion}</p>
                    <p>{this.props.clasificacion}</p>

                    <div className="precio">
                        <p>€</p>
                        <h3>{this.props.precio}</h3>                        
                        <p>la hora</p>
                    
                    </div>
                    <div className="precio-dia">
                        <p>€</p>
                        <h3>{numeral(((this.props.precio)*24)*0.8).format('0,0')}</h3>
                        <p>por día</p>
                    </div>
                </div>

                <div className="caja-derecha">
               
                {/* <Link to={this.props.modelo}> <img src={this.props.imagen} alt={this.props.nombre}></img></Link>  */}
                <a href={this.props.modelo}> <img src={this.props.imagen} alt={this.props.nombre}></img></a>

                </div>
            </div>

        )

    }

}













// export const CajaCoches = (nombre, imagen, aceleracion) => {

   
  
//     return (   

//         <div className="caja-pequenia">
//             {coches.map((coche) => <h2>{coche.nombre}</h2> )}
//             {coches.map((coche) => <img src={coche.imagen}/>  )}
//             {coches.map((coche) => <h2>{coche.aceleracion}</h2>   )}
           
           
//         </div>
       
//     )
// }
