import React,{useState} from 'react'
import './Examen.css'
import {questions} from '../db/Db.jsx'

const Examen = () => {

     let[minutes,setMinutes]=useState(2)
     let[seconds,setSeconds]=useState(59)
     let[life,setLife]=useState(3)
     let[random,setRandom]=useState(Math.round(Math.random()*(4-1)+1))
                                                                           

    return (
        <>
      <div className="examen-container">
          
          <header className="examen-header">
              <h3 className="examen-header-minutes">Minutes:{minutes}</h3>
              <h3 className="examen-header-seconds">Seconds:{seconds}</h3>
         </header>   

        <div className="examen-container-life">
            <h3 className="examen-life">Life:{life}</h3>
        </div>
        
        <div className={questions[random].type}></div>
         
         <div className="examen-container-buttons">
             <h3 className="examen-buttons-h3">{questions[random].question}</h3>
             <button className="examen-button" onClick={''}>{questions[random].options[0]}</button>
             <button className="examen-button" onClick={''}>{questions[random].options[1]}</button>
             <button className="examen-button" onClick={''}>{questions[random].options[2]}</button>
         </div>
      
      
      </div>

            
        </>
    )
}

export default Examen
