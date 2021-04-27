import React from 'react'
import {Link} from 'react-router-dom'
import './Entrenamiento.css'




const Entrenamiento = () => {
    
    
    return (
        <>

    <div className="entrenamiento-container">
    <div className="entrenamiento-separador"></div>       
    <Link to='/geografia'>GEOGRAFÍA</Link><br/>
    <div className="entrenamiento-separador"></div>
     <Link to='/tribus'>TRIBUS</Link><br/>
     <div className="entrenamiento-separador"></div>
     <Link to='/fauna'>FAUNA</Link>
     <div className="entrenamiento-separador"></div>
     <div className="entrenamiento-separador"></div>
     <Link to='/'>VOLVER</Link>
     </div>



    
        
        </>
    )
}

export default Entrenamiento
