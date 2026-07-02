import React from 'react'

const StackNotes = (props) => {
  return (
    <div className='bg-gray-200 flex gap-3'>
        {props.notes.map((note, idx) => (
            <div>
                <div>{note.title}</div>
                <div>{note.content}</div>
            </div>
        ))}
    </div>
  )
}

export default StackNotes