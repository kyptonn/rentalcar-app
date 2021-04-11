import React, { useState } from 'react'
import './Navbar.css'
import logo from './icons8-blockchain-new-logo-64.png'
import {Link} from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Rent from './pages/Rent'






const Navbar = () => {

    
    const [navLinkOpen, setNavLinkOpen] = useState(false)
    

    const cambiarEstado = () =>{
        setNavLinkOpen(!navLinkOpen)
    }

    return (
        
            <nav>
                <div className="logo">
                <img src={logo} alt="Logo"/>
                </div>

                
                <ul className={navLinkOpen ? 'navlinks active animate__animated animate__fadeIn animate__fast' : 'navlinks'}>
                    <Link to='/'><a>Home</a></Link>
                    {/* <li className="link"><a href="#">Home</a></li>*/}
                    <Link to='/coches'><a>Coches</a></Link>
                    {/* <li className="link"><a href="#">Services</a></li> */}
                    <Link to='/home'><a>Iniciar Sesion / Registro</a></Link>
                    {/* <li className="link"><a href="#">Contact Us</a></li> */}
                    <div onClick={cambiarEstado} className="hamburger-toggle2">
                    <i className="fas fa-bars fa-lg"></i>
                </div>



                </ul>
                <div onClick={cambiarEstado} className="hamburger-toggle">
                    <i className="fas fa-bars fa-lg"></i>
                </div>




              


                
                {/* <div className="hamburger">
                    <div className="lineas"></div>
                    <div className="lineas"></div>
                    <div className="lineas"></div>
                </div> */}

                

            </nav>
       
    )
}

export default Navbar
