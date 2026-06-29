import React from 'react'

const UpperImg = () => {
  return (
    <div className='bg-[#eae2f7] flex pl-8 rounded-4xl overflow-hidden'>

      <div className='flex flex-1 flex-col justify-center items-start gap-2'>
        <button className='bg-[#e3dbf0] border-2 border-[#bcb4c9] text-sm py-1 px-2.5 rounded-full'>Mind-Body-Soul Balance</button>
        <h1 className='text-6xl font-semibold'>Achieve balance in mind, body, and soul.</h1>
        <p className='mt-6 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus recusandae minus voluptatum saepe blanditiis mollitia?</p>
      </div>

      <div className='flex-1'>
        <img className='h-full -scale-x-100 w-full object-cover object-bottom ' src="https://framerusercontent.com/images/Zfnas1cM52U6Txl1kRVl4DmW8Ao.png" alt="" />
      </div>
    </div>
  )
}

export default UpperImg