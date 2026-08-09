import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter , setCounter]=useState(15);
  // let counter = 15;


  const addValue = () => {
    setCounter(counter+1);
    console.log("The Value of counter is: ",counter);
  }

  const removeValue = () => { 
    if(counter>0){
      setCounter(counter-=1);
      console.log("The value of counter is: ",counter);
    }

  }
  


  return (
    <>
        <h1>Counter App</h1>
        <h3>Counter Value: {counter}</h3>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
