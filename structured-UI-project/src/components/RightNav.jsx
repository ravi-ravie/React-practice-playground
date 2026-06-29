import React from 'react'

const RightNav = (props) => {

  return (
    <div className='flex gap-3'>
        {props.navItems.map((elem)=>{
            return <button key={elem.label} className='bg-white border-2 border-gray-200 py-2 p-5 rounded-full text-xs font-medium'>{elem.label}</button>
        })}
    </div>
  )
}

export default RightNav