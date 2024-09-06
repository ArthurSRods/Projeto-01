import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ParOuImpar from './components/ParOuImpar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent/>
      <SecondComponent/>
      <ParOuImpar/>
    </>
  )
}

export default App
