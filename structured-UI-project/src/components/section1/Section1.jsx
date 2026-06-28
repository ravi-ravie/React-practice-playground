import React from 'react'
import Navbar from './navbar'
import MainContent from './MainContent'

const Section1 = () => {
  return (
    <div className='font-serif p-8 h-screen overflow-hidden'>
      <Navbar />
      <MainContent/>
    </div>
    
  )
}

export default Section1