import React from 'react'

const LeftNav = () => {
  return (
    <div className='flex gap-2 items-center'>
        <img className='size-7 object-cover rounded-full' src="https://images.unsplash.com/photo-1776741929154-0be7df245bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFMlMjBjb21wYW55JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="logo" />

        <h1 className='uppercase [word-spacing:.2rem] font-medium text-xl'>serenity yoga</h1>
    </div>
  )
}

export default LeftNav