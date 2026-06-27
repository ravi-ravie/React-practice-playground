import React from 'react'
import LeftNav from '../LeftNav'
import RightNav from '../RightNav'

const Navbar = () => {
    const navItems = [
        {label: 'About Us'},
        {label: 'Reviews'},
        {label: 'Trainers'},
        {label: 'Classes'}
    ]

  return (
    <div className='flex justify-between'>
        <LeftNav />
        <RightNav navItems={navItems}/>
    </div>
  )
}

export default Navbar