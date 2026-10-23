

function TaskCards({data}) {
    return (
        <div className='flex justify-around flex-wrap gap-5 mt-3'>
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                {/* Added ? to prevent crashes, and || 0 to show a default number */}
                <h2 className='text-3xl font-semibold'>{data?.taskNumbers?.newTask || 0}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data?.taskNumbers?.completed || 0}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data?.taskNumbers?.active || 0}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            
            <div className='w-[45%] p-10 bg-green-700 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data?.taskNumbers?.failed || 0}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskCards