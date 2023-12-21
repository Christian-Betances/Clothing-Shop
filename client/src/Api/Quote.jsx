import React, { useEffect, useState } from 'react';

function Quote() {

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
    <div id="quote"></div>
  );
}

export default Quote;
