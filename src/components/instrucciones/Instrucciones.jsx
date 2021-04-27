import React from 'react'
import './Instrucciones.css'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

const Instrucciones = () => {

    

    
    return (
        <>
        <div className="instrucciones-container">
            
            <div className="instrucciones-header">
                <h1 className="instrucciones-header-h1">INSTRUCCIONES</h1>
            </div>
                                                            
               <p className="instrucciones-parrafo">Esta aplicación tiene una finalidad educativa. Sobre distintas areas relacionadas con 
                   conocimientos generales de todo lo referente a la selva Amazónica. En la sección entrenamiento está la teória con la cual 
                   esta realizada la parte de examen . Este examen es tipo juego para aprender de una manera amena y divertida. Con un sistema de 
                   puntuaciones,record y tiempo limite para responder cada pregunta.Las preguntas estan divididas en diferentes areas , geografía,
                   tribus y fauna ,aunque luego en examen se mezclan todas aleatoriamente.Es hora de demostrar tus conocimientos.</p>
        
             <Link to='/'>VOLVER</Link>
        
                                                                                     
        
        </div>
            
        </>
    )
}

export default Instrucciones
