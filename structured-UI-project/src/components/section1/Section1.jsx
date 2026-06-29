import React from 'react'
import Navbar from './navbar'
import MainContent from './MainContent'

const Section1 = () => {
  return (
    <div className='font-sans p-8 h-screen bg-[#f6f6f6] overflow-hidden'>
      <Navbar />
      <MainContent/>
    </div>
    
  )
}

export default Section1