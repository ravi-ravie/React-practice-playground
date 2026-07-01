import React from 'react'

const Form = () => {
  return (
    <div className='bg-gray-600'>
        <form action="" className='flex flex-col items-start'>

            <input type="text" placeholder='Note title...'/>
            <textarea placeholder='Write your note...'></textarea>

            <button>+ add note</button>
            
        </form>
    </div>
  )
}

export default Form