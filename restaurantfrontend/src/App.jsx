import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import Signup from './Signup';
import Services from './Services';
import Yummy from './Yummy';
import './index.css';

class App extends Component {

    render() { 
        return ( 
            <BrowserRouter>
             <Nav />
                <div className="container">
                    <Route path='/signup' component={Signup} />
                    <Route path='/create' component={Services} />
                    <Route path='/' exact component={Yummy} />

                </div>
            </BrowserRouter>
         );
    }
}
 
export default App;