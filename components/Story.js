import React from 'react'

const Story = ({img, username}) => {
  return (
    <div>
        <img className='h-10 w-10 rounded-full p-[1.5px] border-red-500 border-2 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt="" />
        <p className='text-center'>{username}</p>
    </div>
  )
}

export default Story