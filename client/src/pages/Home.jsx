import React from 'react';
import {useEffect} from 'react'
import './Home.css';
import NavBar from '../components/NavBar';

function Home(){

    useEffect(() => { 
        getQuote();
      }, []);
    
      function getQuote() {
        fetch('https://api.quotable.io/random?tags=motivational')
        .then((response)=>{
          return response.json()
        }).then((data) =>{
          let message = data.content
          console.log(JSON.stringify(data))
          document.getElementById("quote").innerHTML = JSON.stringify(message);
        })
      }

    return(

        <div className="header">
            <div id="quote"></div>
             <NavBar />
            <img src="https://images.pexels.com/photos/911254/pexels-photo-911254.jpeg"/>
            </div>
    )
}

export default Home;