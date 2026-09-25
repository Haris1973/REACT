import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Chai aur React - This is context api series</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
