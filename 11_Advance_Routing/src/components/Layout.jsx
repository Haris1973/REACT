  import React from 'react'
  import Navbar from './Navbar'
  import Footer from './Footer'
  import { Outlet } from 'react-router-dom'
  import Btn from './Btn'

 function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <Btn/>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

  export default Layout