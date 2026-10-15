import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
       <div className='flex justify-between p-5 bg-gray-900'>
            <h3>Mehar Haris</h3>
            <div className='flex gap-10'>
                <Link to={'/'}>Home</Link>
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/Contact'}>Contact</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/product'}>Products</Link>
            </div>
       </div>
    </div>
  )
}

export default Navbar