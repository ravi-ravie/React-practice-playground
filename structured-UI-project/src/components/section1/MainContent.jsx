import React from 'react'
import ScrolledCards from '../ScrolledCards'

const MainContent = () => {
  return (
    <div className='grid grid-rows-2 py-5 gap-5 h-full'>
      <div className='bg-red-500  bg-teal-400'>box1</div>

      <ScrolledCards />
    </div>
  )
}

export default MainContent