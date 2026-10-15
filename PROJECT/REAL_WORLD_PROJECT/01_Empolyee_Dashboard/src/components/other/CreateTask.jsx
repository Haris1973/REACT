import React from 'react'

function CreateTask() {
  return (
    <div className='mt-10 max-w-4xl mx-auto bg-[#2c2c2c] p-8 rounded-xl shadow-lg'>
        <form className='flex flex-wrap lg:flex-nowrap gap-10 w-full'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                    <input 
                        type="text" 
                        placeholder='Make a UI Design' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                    <input 
                        type="date" 
                        className='w-full bg-transparent border border-gray-600 p-3 text-gray-400 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Assign To</h3>
                    <input 
                        type="text" 
                        placeholder='Employee Name' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                    <input 
                        type="text" 
                        placeholder='Design, Dev, etc.' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
                    />
                </div>
            </div>
            
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                <div className='flex-grow'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea 
                        rows="8" 
                        className='w-full h-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none' 
                        placeholder='Enter task description...'
                    ></textarea>
                </div>

                <button className='bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full mt-4'>
                    Create Task
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateTask