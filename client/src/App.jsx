import { useState } from 'react'
import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/api')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  })
  return (
      <div></div>
  )
}

export default App
