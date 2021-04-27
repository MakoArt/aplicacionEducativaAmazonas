import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Inicio.css'


const Inicio = () => {

    const[vidas,setVidas]=useState(localStorage.setItem('lifes',3))
    const[vida,setVida]=useState(localStorage.getItem('lifes'))
    
   
    return (
        <>
     <div className="inicio-container">
        
     <h2>COMIENZAS CON {vida} VIDAS</h2>
         <div className="espaciado"></div>
         <Link to='/examen'>EMPEZAR</Link>

     </div>
       
        </>
    )
}

export default Inicio
