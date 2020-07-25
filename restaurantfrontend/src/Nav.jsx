import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="nav-link" ><img className="logo" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595640391/migrant%20solutions%20project/Chef-removebg-preview_xw5b3e.png" alt="chef logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto  nav-tabs ">
                
                <li className="nav-item">
                    <Link to="/" className="nav-link text-warning active">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link text-warning">Order</Link>
                </li>
                <li className="nav-item">
                <Link to="/signup" className="nav-link text-warning">Signup</Link>
                </li>
                </ul>
                
            </div>
        </nav>
         );
    }
}
 
export default Nav;