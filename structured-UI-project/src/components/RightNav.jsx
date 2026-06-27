import React from 'react'

const RightNav = (props) => {

  return (
    <div className='flex gap-4'>
        {props.navItems.map((elem)=>{
            return <button className=''>{elem.label}</button>
        })}
    </div>
  )
}

export default RightNav