import React from "react";
import Navbar from "./Navbar.js";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import history from '../History';
import Generator from "./Generator";
import Feed from "./Feed";

function App() {

  return ( 
  
  <Router history={history}>
  <div>
    <Navbar />
    <div className="container"> 
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Generator" component={Generator} />
                    <Route path="/Feed" component={Feed} />
                </Switch>
    </div> 
    </div>
  
  </Router>
    );
  
}

export default App;
