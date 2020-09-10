import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar' 
import Drawer from './Navbar/Drawer'
import { css } from 'emotion'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Cardselect from './Navbar/Cardselect'
import Cardimage from './Navbar/Cardimage'
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (
    <Auth0Provider
    domain="dev-ut192mtx.us.auth0.com"
    clientId="tdqHGHGNB50GBL47rDer2dqUc0Suk9CO"
    redirectUri={window.location.origin}
  >
    <div className="App">
     <Navbar/>
     <Card body className={css({
      height:'90px',
      position:'relative',
      bottom:'50px',
    })}>
          <Cardselect className={css({
            borderRadius:'50px',
            
          })}
    />
        </Card>
        <Cardimage/>
    </div>
    </Auth0Provider>
  );
}

export default App;
