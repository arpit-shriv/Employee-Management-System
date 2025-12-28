import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-80 w-[300px] p-5 bg-orange-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-base'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-3'>
          {data.description}
        </p>
        <div className='mt-4'>
          <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
