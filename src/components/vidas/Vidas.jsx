import React,{useState} from 'react'
import './Vidas.css'

const Vidas = (props) => {
    
  let vidas=localStorage.getItem('vidas')
  
 
    
  if(props.resta){
    vidas=vidas-=1

    if(vidas>0){
       props.sigueContador()
    }
    if(vidas<0){
       props.gameOver()
    }
  }


    return (
        <>
     
     <div className="container_vidas">
           <h3 className="vidas_h3">LIFES:<span className="vidas_number">{vidas}</span></h3>
     </div>                                                                    

            
        </>
    )
}

export default Vidas
