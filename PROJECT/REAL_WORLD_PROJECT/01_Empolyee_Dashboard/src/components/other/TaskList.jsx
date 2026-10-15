import React from 'react'

function TaskList() {
  return (
    <div id='TaskList' className='h-[400px] flex items-center justify-start gap-8 w-full overflow-x-auto mt-10'>
        {/* Added flex-shrink-0 so the cards keep their full 300px width */}
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-600 rounded-xl p-5'>
          <div className='flex justify-between p-3 items-center'>
                <h3 className='px-3 py-2 bg-red-700 rounded-xl font-semibold'>Hot</h3>
                <h2 className='text-sm'>24-Jan-2026</h2>
          </div>

          <div>
            <h3 className='mt-4 text-xl font-semibold'>Visit our youtube video</h3>
            <p className='text-sm italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas dignissimos inventore doloribus, soluta veniam sed temporibus totam cumque illum aliquam sunt cupiditate maxime qui voluptas minima omnis, voluptates harum. Quia nostrum deserunt iste facere, similique ratione hic voluptas saepe.</p>
          </div>
        </div>

        {/* item-02 */}
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-600 rounded-xl p-5'>
          <div className='flex justify-between p-3 items-center'>
                <h3 className='px-3 py-2 bg-red-700 rounded-xl font-semibold'>Hot</h3>
                <h2 className='text-sm'>24-Jan-2026</h2>
          </div>

          <div>
            <h3 className='mt-4 text-xl font-semibold'>Visit our youtube video</h3>
            <p className='text-sm italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas dignissimos inventore doloribus, soluta veniam sed temporibus totam cumque illum aliquam sunt cupiditate maxime qui voluptas minima omnis, voluptates harum. Quia nostrum deserunt iste facere, similique ratione hic voluptas saepe.</p>
          </div>
        </div>

        {/* item-03 */}
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-600 rounded-xl p-5'>
          <div className='flex justify-between p-3 items-center'>
                <h3 className='px-3 py-2 bg-red-700 rounded-xl font-semibold'>Hot</h3>
                <h2 className='text-sm'>24-Jan-2026</h2>
          </div>

          <div>
            <h3 className='mt-4 text-xl font-semibold'>Visit our youtube video</h3>
            <p className='text-sm italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas dignissimos inventore doloribus, soluta veniam sed temporibus totam cumque illum aliquam sunt cupiditate maxime qui voluptas minima omnis, voluptates harum. Quia nostrum deserunt iste facere, similique ratione hic voluptas saepe.</p>
          </div>
        </div>

        {/* item-04 */}
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-600 rounded-xl p-5'>
          <div className='flex justify-between p-3 items-center'>
                <h3 className='px-3 py-2 bg-red-700 rounded-xl font-semibold'>Hot</h3>
                <h2 className='text-sm'>24-Jan-2026</h2>
          </div>

          <div>
            <h3 className='mt-4 text-xl font-semibold'>Visit our youtube video</h3>
            <p className='text-sm italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas dignissimos inventore doloribus, soluta veniam sed temporibus totam cumque illum aliquam sunt cupiditate maxime qui voluptas minima omnis, voluptates harum. Quia nostrum deserunt iste facere, similique ratione hic voluptas saepe.</p>
          </div>
        </div>
    </div>
  )
}

export default TaskList