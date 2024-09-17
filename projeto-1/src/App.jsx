import { useState } from 'react'
import GerenciarAlunos from './components/GerenciarAlunos'
import ListaProfessores from './components/ThirdComponent'
import ParOuImpar from './components/ParOuImpar'
import FocusBlurExample from './components/Blur'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GerenciarAlunos/>
      <ListaProfessores/>
      <ParOuImpar/>
      <FocusBlurExample/>
    </>
  )
}

export default App
