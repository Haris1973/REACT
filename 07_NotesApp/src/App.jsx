import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';
function App() {

  const [title, settitle] = useState('')
  const [detials, setdetials] = useState('')
  const [task, settask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted!!!');

    const copyTask = [...task]

    copyTask.push({title,detials})

    settask(copyTask)

    console.log(copyTask)
    
    settitle('') 
    setdetials('')
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
        <form onSubmit={(e) => {
                handleSubmit(e)
              }}
           className='flex flex-col-reverse items-center lg:flex-row lg:justify-around gap-10 lg:p-8'>
            <div className='flex gap-8 w-1/2 flex-col items-start'>
              <input 
              className='lg:text-2xl w-full px-14 py-5 md:p-5 border-2 rounded-xl lg:rounded-2xl'
              type="text" 
              placeholder='Enter Notes Heading'
              value={title}
              onChange={(e) => {
                settitle(e.target.value)
              }}
              />

            <textarea 
              className='lg:text-lg w-full p-9 lg:p-5 border rounded-xl'
              placeholder='Write Details in this section please...'
              value={detials}
              onChange={(e) => {
                console.log(e.target.value)
                setdetials(e.target.value)
              }}
            />

            <button className='bg-amber-50 active:bg-gray-400 w-full border rounded-2xl text-lg text-black px-2 py-2 font-bold'>Add Notes</button>
            </div>
            <img className='h-69' src="https://play-lh.googleusercontent.com/rtpb1PfTlA0ZxUyeEj_gokkX5T-5Fk99Xjm4_6qPOzygnKHchzwAijXzGSrhS34Kt9PskAQFIcBaO4K13GVvOA" alt="" />
        </form>

        <div className='p-10'>
          <h1 className='py-5 text-3xl font-bold'>Recent Notes:</h1>
          <div className='flex flex-col gap-3'>
              {task.map((elem , idx) => {
                return <div key={idx} className='px-4 py-3 bg-gray-700 text-lg rounded-2xl flex justify-between items-center'>
                    <div>
                        <h3 className='font-bold text-xl py-2'>{elem.title}</h3>
                        <p>{elem.detials}</p>
                    </div>
                    <div className='hover:cursor-pointer'><X color="#f01919" strokeWidth={3} /></div>
                </div>
              })}

          </div>
          
        </div>
    </div>
  )
}

export default App