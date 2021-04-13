import React from "react";
import Navbar from "./Navbar.js"
import { Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import history from '../History';


function App() {

  return ( 
  
  <Router history={history}>
  <div>
    <Navbar />
    <div className="container"> 
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                </Switch>
    
    </div> 
    </div>
  
  </Router>
    );
  
}

export default App;