import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlusMinus from './Component/PlusMinus'
import Cal from './Component/Cal'

function App() {
  

  return (
    <>
      <PlusMinus/>
      <br />
      <br />
      <Cal/>
    </>
  )
}

export default App
