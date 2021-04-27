import React,{useEffect, useState,createRef} from 'react'
import './Examen.css'
import {questions} from '../db/Db.jsx'
import {Redirect} from 'react-router-dom'

const Examen = () => {

     let[points,setPoints]=useState(0)
     let[gameOver,setGameOver]=useState(false)
     let[minutes,setMinutes]=useState(0)
     let[random,setRandom]=useState(Math.round(Math.random()*(4-1)+1))
     let[record,setRecord]=useState(localStorage.getItem('record')) 
     let[seconds,setSeconds]=useState(59)
     let[vidas,setVidas]=useState(localStorage.getItem('lifes'))
     const[vidaMenos,setVidaMenos]=useState(false)
     
     let displayNone1=createRef()
     let displayNone2=createRef()
     let displayNone3=createRef()
     
     const cuentaAtras=useEffect(()=>{
        
       const timer=setInterval(()=>{
           if(seconds>0)
           setSeconds(seconds-=1)
           else{
            setSeconds(seconds=59)
            setMinutes(minutes-=1)
           }

           if(minutes<=0){
               setMinutes(minutes=0)
               if(seconds<=0){
                   setVidas(vidas-=1)
                   setMinutes(minutes=0)
               }
           }

        },1000)

        
        if(vidas<0){
          setGameOver(gameOver=true)
          setVidas(vidas=0)
        
        if(points>record){
             setRecord(localStorage.setItem('record',points))
          }
       
        }
      
       
     return ()=>{
         clearInterval(timer)
     }
    
    })
  

    const bien=()=>{
      setRandom(Math.round(Math.random()*(4-1)+1))
      setMinutes(minutes=0)
      setSeconds(seconds=59)
      setPoints(points+=1)
    }
    
    
    const mal=()=>{
      setRandom(Math.round(Math.random()*(4-1)+1))
      setVidas(vidas-=1)
      setMinutes(minutes=0)
      setSeconds(seconds=59)
      
    }
 
    


    const option1=()=>{


     if(questions[random].options[0]===questions[random].result){
        
        
        bien()
      
      
     }else{
       
     
        mal()

  
         
     }
      
   

    }


    
    const option2=()=>{
        if(questions[random].options[1]===questions[random].result){
            bien()
           

       
        }else{
            mal()
        
        }
       
       }


       
    const option3=()=>{
        if(questions[random].options[2]===questions[random].result){
          bien()
        
        }else{
           mal()
        
        }
     
       }
      



   
    return (
        <>
      <div className="examen-container">
          
          <header className="examen-header">
              <h3 className="examen-header-minutes">Minutes:{minutes}</h3>
              <h3 className="examen-header-seconds">Seconds:{seconds}</h3>
         </header>   

        <div className="examen-container-life">
            <h3 className="examen-life">Life:{vidas}</h3>
            <h3 className="examen-points">Points:{points}</h3>
            <h3 className="examen-record">Record:{record}</h3>
        </div>
        
        
        <div className={questions[random].type} id="examen-image"></div>
         
         <div className="examen-container-buttons">
             <h3 className="examen-buttons-h3">{questions[random].question}</h3>
             <button ref={displayNone1} className="examen-button" onClick={option1}>{questions[random].options[0]}</button>
             <button ref={displayNone2} className="examen-button" onClick={option2}>{questions[random].options[1]}</button>
             <button ref={displayNone3} className="examen-button" onClick={option3}>{questions[random].options[2]}</button>
         </div>
          {
            gameOver ?  <Redirect to='/gameover'/> : null
          }
         
       
      </div>

            
        </>
    )
}

export default Examen
