import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-ut192mtx.us.auth0.com"
    clientId="tdqHGHGNB50GBL47rDer2dqUc0Suk9CO"
    redirectUri={window.location.origin}
  >
    <Routes />
    </Auth0Provider>
  </React.StrictMode>,
   
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
