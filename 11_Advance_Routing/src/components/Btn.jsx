import React from 'react'
import { useNavigate } from 'react-router-dom'

function Btn() {

  let navigate = useNavigate();

  return (
    <div className="flex gap-10 justify-center py-5">
        <button onClick={() => {
          navigate('/')
        }} className='rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95'>
          Return To Home
        </button>
        <button onClick={() => {
          navigate(-1)
        }} className='rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95'>
          Back
        </button>
    </div>
  )
}

export default Btn