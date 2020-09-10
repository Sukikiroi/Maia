import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Singin from './Singin'
import Header from './Header'
import Footer from './Footer'
function  PersistentDrawerLeft( { history }) {


    return (
<div>
    <Header/>
<Singin/>
   < Footer/>
</div>
        );
    }


    export default withRouter(PersistentDrawerLeft)