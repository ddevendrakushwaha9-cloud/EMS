import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-yellow-600 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h2 className='text-sm'>{data.taskDate}</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className=' flex  justify-center items-center mt-2'>
            <button className='w-[50%] bg-red-500 py-1 px-2 text-sm rounded'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask