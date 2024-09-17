import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import ParOuImpar from './components/ParOuImpar'
import FocusBlurExample from './components/Blur'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <ParOuImpar/>
      <FocusBlurExample></FocusBlurExample>
    </>
  )
}

export default App
