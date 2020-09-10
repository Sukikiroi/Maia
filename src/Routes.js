import React, { Component } from 'react';
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Singin from './Sing in/Singin'
import Singtotal  from './Sing in/Singtotal'
import Singup from './SignUp/SignUp'

class Routes extends Component {
  
  render () {
    
    return (
      
      <Router>
        <div className="App">
        <div className="container">
          <Route exact path="/" component={App} />
            <Route exact path="/Comparaison" component={Singin} />
            <Route exact path="/Singin" component={Singtotal} />
            <Route exact path="/SingUp" component={Singup} />
          </div>
         
        </div>
      </Router>
    );
  }
}

export default Routes;
