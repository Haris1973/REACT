import React from 'react'

function AllTask() {
  return (
    // Changed the background to #1C1C1C to match your dashboard theme perfectly
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded-2xl'>
        
        {/* Table Header: Added a distinct header row so users know what each column means */}
        <div className='bg-indigo-600 mb-4 py-3 px-5 flex justify-between rounded-lg font-bold text-white shadow-md'>
            {/* Added fixed widths (w-1/5 and w-3/5) so the columns align perfectly straight */}
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-3/5'>Task Title</h3>
            <h5 className='w-1/5 text-center'>Status</h5>
        </div>

        {/* Task Row 1 - Active */}
        <div className='bg-transparent border border-gray-600 mb-2 py-3 px-5 flex justify-between rounded-lg text-gray-300 hover:bg-[#2c2c2c] transition-colors'>
            <h2 className='w-1/5'>Mehar Haris</h2>
            <h3 className='w-3/5'>Make the UI Design of Website</h3>
            {/* Applied colors only to the status text instead of the whole background */}
            <h5 className='w-1/5 text-center text-yellow-400 font-semibold'>In Progress</h5>
        </div>

        {/* Task Row 2 - Completed */}
        <div className='bg-transparent border border-gray-600 mb-2 py-3 px-5 flex justify-between rounded-lg text-gray-300 hover:bg-[#2c2c2c] transition-colors'>
            <h2 className='w-1/5'>Mehar Haris</h2>
            <h3 className='w-3/5'>Develop the Login API</h3>
            <h5 className='w-1/5 text-center text-green-400 font-semibold'>Completed</h5>
        </div>

        {/* Task Row 3 - Failed/Delayed */}
        <div className='bg-transparent border border-gray-600 mb-2 py-3 px-5 flex justify-between rounded-lg text-gray-300 hover:bg-[#2c2c2c] transition-colors'>
            <h2 className='w-1/5'>Mehar Haris</h2>
            <h3 className='w-3/5'>Fix Dashboard Layout Bug</h3>
            <h5 className='w-1/5 text-center text-red-500 font-semibold'>Failed</h5>
        </div>

        {/* Task Row 4 - New */}
        <div className='bg-transparent border border-gray-600 mb-2 py-3 px-5 flex justify-between rounded-lg text-gray-300 hover:bg-[#2c2c2c] transition-colors'>
            <h2 className='w-1/5'>Mehar Haris</h2>
            <h3 className='w-3/5'>Optimize Database Queries</h3>
            <h5 className='w-1/5 text-center text-blue-400 font-semibold'>New Task</h5>
        </div>
        
        {/* Task Row 5 */}
        <div className='bg-transparent border border-gray-600 mb-2 py-3 px-5 flex justify-between rounded-lg text-gray-300 hover:bg-[#2c2c2c] transition-colors'>
            <h2 className='w-1/5'>Mehar Haris</h2>
            <h3 className='w-3/5'>Update Server Packages</h3>
            <h5 className='w-1/5 text-center text-yellow-400 font-semibold'>In Progress</h5>
        </div>

    </div>
  )
}

export default AllTask