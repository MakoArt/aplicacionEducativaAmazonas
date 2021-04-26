import React,{useState} from 'react'
import './App.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Portada from './components/portada'
import Instrucciones from './components/instrucciones'
import Examen from './components/examen/Examen.jsx'


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
     
  </Router>
     </>
  );
}

export default App;
