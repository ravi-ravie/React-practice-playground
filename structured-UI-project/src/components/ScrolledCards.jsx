import React from 'react'

const ScrolledCards = (props) => {
  return (
    <div className='no-scrollbar grid grid-flow-col auto-cols-[20%_28%_35%]  gap-5 overflow-x-auto'>
        {props.yogaBenefits.map((elem)=>{
          const Icon = elem.icon
            return (
              
              <div key={elem.benefit} className='overflow-hidden relative rounded-4xl'>
                <img className='h-full w-full object-cover' src={elem.img} alt="" />
                  <div className='absolute inset-0 flex flex-col justify-between pt-5'>
                    <div className='flex justify-between px-6'>
                      <button className='bg-white py-1 px-3 font-medium text-sm rounded-full'>{elem.view}</button>
                      <button className='bg-white p-1 rounded-full'><Icon /></button>
                    </div>
                    <p className='text-white backdrop-blur-[2px] px-6 pb-8 pt-2 text-2xl font-semibold'>{elem.benefit}</p>
                  </div>
              </div>
            )
        })}
    </div>
  )
}

export default ScrolledCards