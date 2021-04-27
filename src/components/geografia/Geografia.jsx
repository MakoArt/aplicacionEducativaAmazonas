import React from 'react'
import './Geografia.css'
import {Link} from 'react-router-dom'

const Geografia = () => {
    return (
        <>
         <div className="geografia-container">
                                   
         <h1>GEOGRAFÍA </h1>
                                             
         <h2>Paises con territorio amazónico</h2>
         <p>
   Colombia 6.6% 
   Venezuela 5.9% 
   Guyana 2.1% 
   Surinam 7% 
   Guayana Fr 0.8% 
   Brasil 64.4% 
   Bolivia 7% 
 Peru 9.7% 
   Ecuador 1.6% 
   Colombia 6.6% 
     </p>
        
    <h2>Rio Amazonas</h2>

    <p>La tribu Guaraní le llama paranaguasú </p>

    <p>Atraviesa perú,colombia y brasil </p>

   <p>Más largo y caudaloso del mundo </p>
    
    <p>Mayor longitud del mundo </p>   
        
    <h2>Rio Orinoco</h2>    
        
    <p>Paso por venezuela y colombia</p>
    <p>Desemboca en oceano atlantico </p>
    <p>Nace en venezuela</p>
 
   
     <Link to="/entrenamiento">VOLVER</Link>


        
</div> 
        </>
    )
}
                                              
export default Geografia
