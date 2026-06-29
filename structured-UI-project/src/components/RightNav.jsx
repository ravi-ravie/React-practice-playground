import React from 'react'

const RightNav = (props) => {

  return (
    <div className='flex gap-2'>
        {props.navItems.map((elem)=>{
            return <button className='bg-white border-2 border-gray-200 py-2 px-4 rounded-full text-xs font-medium'>{elem.label}</button>
        })}
    </div>
  )
}

export default RightNav