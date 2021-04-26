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
                                                            
               <p className="instrucciones-parrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia totam aut soluta eum ut repudiandae rem dolorum, provident illo inventore ea nobis mollitia suscipit fuga debitis nam eveniet architecto.</p>
        
             <Link to='/'>VOLVER</Link>
        
                                                                                     
        
        </div>
            
        </>
    )
}

export default Instrucciones
