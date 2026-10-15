import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Product from './components/Product'


function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product' element={<Product />}></Route>
        </Routes>
    </div>
  )
}

export default App