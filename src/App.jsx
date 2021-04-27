import React,{useState} from 'react'
import './App.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Portada from './components/portada'
import Instrucciones from './components/instrucciones'
import Examen from './components/examen/Examen.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import GameOver from './components/gameOver/GameOver.jsx'
import Entrenamiento from  './components/entrenamiento/Entrenamiento.jsx'
import Geografia from './components/geografia/Geografia.jsx'
import Tribus from './components/tribus/Tribus.jsx'
import Fauna from './components/fauna/Fauna.jsx'
                                                                             
function App() {


 
 return (
     <>
   <Router>
  
  <Switch>
   <Route  exact path="/">
     <Portada/>
   </Route>
  </Switch>
  

  <Switch>
   <Route  exact path="/inicio">
     <Inicio/>
   </Route>
  </Switch>
  
  
  
    
  <Switch>
   <Route exact path="/instrucciones" component={Instrucciones}/>

 </Switch>
                                                               

     
  <Switch>
   <Route exact path="/entrenamiento">
   
   </Route>
  </Switch>
     

       
  <Switch>
   <Route exact path="/examen">
     <Examen/>
   </Route>
  </Switch>


  <Switch>
   <Route exact path="/gameover">
     <GameOver/>
   </Route>
  </Switch>
     
  <Switch>
   <Route exact path="/entrenamiento">
     <Entrenamiento/>
   </Route>
  </Switch>
  
  
  
  <Switch>
   <Route exact path="/geografia">
     <Geografia/>
   </Route>
  </Switch>
  
  
  <Switch>
   <Route exact path="/tribus">
     <Tribus/>
   </Route>
  </Switch>
  
  
  
  <Switch>
   <Route exact path="/fauna">
     <Fauna/>
   </Route>
  </Switch>
  
  
  
  
  
  
  </Router>



  
     </>
  );
}

export default App;
