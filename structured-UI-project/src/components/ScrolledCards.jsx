import React from 'react'

const ScrolledCards = () => {
  return (
    <div className='no-scrollbar grid grid-flow-col auto-cols-[20%_28%_35%]  gap-5 overflow-x-auto'>
        <div className='bg-red-500 '>box2</div>
        <div className='bg-blue-500 '>box3</div>
        <div className='bg-green-500 '>box4</div>
        <div className='bg-green-500 '>box4</div>
        <div className='bg-green-500 '>box4</div>
        <div className='bg-green-500 '>box4</div>
    </div>
  )
}

export default ScrolledCards