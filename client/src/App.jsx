import { useState } from 'react'
import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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

  return (
      <div>
        <h1>Hello</h1>
        <div id="quote"></div>
      </div>
  )
}

export default App
