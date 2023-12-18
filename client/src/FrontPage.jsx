import React from 'react';
import {useEffect} from 'react'
import './FontPage.css';

function FrontPage(){

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
            <img src="https://images.pexels.com/photos/911254/pexels-photo-911254.jpeg"/>
            </div>
    )
}

export default FrontPage;