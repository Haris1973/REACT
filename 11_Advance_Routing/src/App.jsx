import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Footer from './components/Footer'
import Men from './components/Men'
import Women from './components/Women'
import NotFound from './components/Notfound'
import Layout from './components/Layout'
import Courses from './components/Courses'
import CourseDetail from './components/CourseDetail'

function App() {
  return (
    <div>
        <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element = {<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/product' element={<Product />}>\
                <Route path='/product/men' element={<Men/>}/>
                <Route path='/product/women' element={<Women/>}/>
              </Route>
              <Route path='/courses/:id' element={<CourseDetail/>}/>
              <Route path='/courses' element={<Courses/>}/>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App