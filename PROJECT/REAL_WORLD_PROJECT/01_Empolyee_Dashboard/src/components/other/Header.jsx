import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-xl'>Hello <br /><span className='text-2xl'><b>Mehar Haris 👋🏻</b></span></h1>
        <button className='bg-red-700 rounded-2xl px-3 py-2'>LogOut</button>
        
    </div> 
  )
}

export default Header