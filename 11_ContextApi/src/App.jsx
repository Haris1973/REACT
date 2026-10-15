import './App.css'
import Nav01 from './components/Navbar/Nav01'
import { useContext, useState } from 'react'
import { themedatacontext } from './contexts/ThemeContext'

function App() {
   const  {theme , settheme} = useContext(themedatacontext)


  const ChangeColor = () => {
    settheme('dark')
  }
  return (
    <>
      <div>
          <Nav01/>
          <button onClick={ChangeColor}>click here</button>
      </div>
    </>
  )
}

export default App
