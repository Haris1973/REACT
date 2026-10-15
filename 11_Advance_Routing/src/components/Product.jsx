import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
      <div className='flex justify-center gap-9 px-3 py-2'>
          <Link to={'/product/men'}>Men's Collection</Link>
          <Link to={'/product/women'}>Women's Collection</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default Product