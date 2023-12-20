import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(){

    return (
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
            <li><Link to="/Shop">Shop</Link></li>
        </ul>
        </nav>
      )
    }

export default NavBar;