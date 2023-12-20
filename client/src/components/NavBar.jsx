import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
import './NavBar.css'

function NavBar(){

    const[toggleNightMode, setNightMode] = useState(false);

    function handleButtonClick () {

        setNightMode((prev) => !prev)
    }

    const nightMode = toggleNightMode && 'nightmode';

    return (
        <nav className={nightMode}>
        <ul>
            <li id="Home"><Link to="/">Home</Link></li>
        </ul>
        <ul>
            <li id="Shop"><Link to="/Shop">Shop</Link></li>
        </ul>
        <div className="nightModeButton">
            <button onClick={handleButtonClick}>Night Mode</button>
        </div>
        </nav>
      )
    }

export default NavBar;