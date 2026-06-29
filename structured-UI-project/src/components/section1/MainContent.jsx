import React from 'react'
import ScrolledCards from '../ScrolledCards'
import UpperImg from '../UpperImg'

const MainContent = () => {
  return (
    <div className='grid grid-rows-2 mt-8 pb-14 gap-5 h-full'>
      <UpperImg />
        
      <ScrolledCards />
    </div>
  )
}

export default MainContent