import React, { useState } from 'react'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');


  const submitForm = (e) => {
    e.preventDefault();
    
  const noteCopy = [...props.notes]
  noteCopy.push({title, content})
  props.setNotes(noteCopy)
  
  setTitle('')
  setContent('')
  }

  return (
    <div className='bg-gray-600'>

        <form className='flex flex-col items-start'>

            <input className='bg-gray-300' type="text" placeholder='Note title...' value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            <textarea className='bg-gray-500' placeholder='Write your note...' value={content} onChange={(e)=>{
              setContent(e.target.value)
            }} ></textarea>

            <button onClick={(e)=>{
              submitForm(e)
            }} className='bg-gray-100'>+ add note</button>
            
        </form>
    </div>
  )
}

export default Form