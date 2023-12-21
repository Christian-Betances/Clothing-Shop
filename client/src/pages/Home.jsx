import React from 'react';
import {useEffect, useState} from 'react'
import './Home.css';
import NavBar from '../components/NavBar';
import Quote from '../Api/Quote';

function Home(){

  const [image, setImage] = useState('');

    useEffect(() => { 
        getRandomBackgroundImage();
      }, []);

      function getRandomBackgroundImage() {

        const image = [
          'https://cdn.pixabay.com/photo/2023/03/30/03/56/graffiti-art-7886745_1280.jpg',
          'https://cdn.pixabay.com/photo/2023/03/30/03/55/graffiti-art-7886741_1280.jpg',
          'https://cdn.pixabay.com/photo/2023/03/30/03/55/graffiti-art-7886740_1280.jpg'
        ]

        const randomImage = image[Math.floor(Math.random() * image.length)]

        setImage(randomImage)
      }

    return(
        <div>
        <div className="header">
        <div id="quote">
          <Quote /> </div>
            <NavBar />
            </div>
            <div className="background"  style={{ backgroundImage: `url(${image})` }}></div>
            </div>
    )
}

export default Home;