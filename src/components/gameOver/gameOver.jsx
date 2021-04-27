import React from 'react'
import './GameOver.css'
import {Link} from 'react-router-dom'

const gameOver = () => {
    
    
    return (
        <>

     <div className="gameover-container">
        <h2 className="gameover-title">¡¡¡¡HAS PERDIDO !!!!</h2>
          <div className="gameover-image"></div>
         
         <Link to='/'>INICIO</Link>

     
     
     </div> 
        
        
        
        </>
    )
}

export default gameOver
