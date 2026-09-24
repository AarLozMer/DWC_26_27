import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Contenedor from './components/UT02/Practica3/Contenedor.jsx'
import Interprete from './components/UT02/Practica3/Interprete.jsx'

function App() {
  

  return (
    <>
      <Contenedor>
        <Interprete nombre="Hola" imagen="https://www.google.com/url?sa=t&source=web&rct=j&url=http%3A%2F%2Fassets.moonlighting.io%2Fcreations%2F781788&ved=0CBYQjRxqFwoTCNjWu-K6h5cDFQAAAAAdAAAAABAF&opi=89978449"></Interprete>
      </Contenedor>
    </>
  )
}

export default App
