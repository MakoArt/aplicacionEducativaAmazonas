
import React ,{useState,useEffect} from 'react'
import './Portada.css'
import {Redirect,BrowserRouter as Router,Link} from 'react-router-dom'

const Portada = () => {
   



     
  
   
   
    return (
        <>
     <div className="portada-container">
      
         <header>
             <h1 className="portada-header-h1">AMAZONAS</h1>
         </header>
         
         <div className="portada-container-img">
         <div className="portada-img"></div>
         </div>
         
         
         <div className="portada-container-buttons">
             <Link to="/instrucciones">INSTRUCCIONES</Link>
             <div className="separador"></div>
             <Link to="/entrenamiento">ENTRENAMIENTO</Link>
             <div className="separador"></div>
             <Link to="/inicio">EXAMEN<span>Term</span></Link> 
         </div>                                            
                                                                                      
                                                          
     
     
     
     </div>  {/*END CONTAINER*/}
    
            
        </>
    )
}

export default Portada
