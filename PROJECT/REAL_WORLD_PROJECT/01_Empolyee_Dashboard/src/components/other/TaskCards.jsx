    import React from 'react'

    function TaskCards() {
    return (
        <div className='flex justify-around flex-wrap gap-5 mt-3'>
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
    }

    export default TaskCards