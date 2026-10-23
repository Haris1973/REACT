function FailedTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-gray-600 rounded-xl p-5'>
        <div className='flex justify-between p-1 items-center'>
            <h3 className='px-3 py-2 bg-red-700 rounded-xl font-semibold'>{data.category}</h3>
            <h2 className='text-sm'>{data.taskDate}</h2>
        </div>

        <div>
        <h3 className='mt-4 text-xl font-semibold'>{data.taskTitle}</h3>
        <p className='text-sm italic mt-2'>{data.taskDescription}</p>
        </div>


        <div className='flex justify-between mt-6 '>
            <button className='bg-red-600 py-2 px-2 text-sm rounded-lg'>Mark Failed</button>
        </div>
    </div>
  )
}

export default FailedTask