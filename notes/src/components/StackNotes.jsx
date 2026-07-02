import React from 'react'
import { RiChatDeleteFill   } from "@remixicon/react";


const StackNotes = (props) => {
	
	const deleteNote = (idx) => {
		const noteCopy = [...props.notes]
		console.log(noteCopy)
		noteCopy.splice(idx,1);
		props.setNotes(noteCopy)
		console.log(noteCopy)
	}
  return (
    <div className='bg-white flex gap-3'>
        {props.notes.map((note, idx) => (
            <div key={idx}>
                <div>{note.title}</div>
                <div>{note.content}</div>
                <RiChatDeleteFill size={24} color="rgba(196,211,255,1)" onClick={()=>{
									deleteNote(idx)
								}}/>
            </div>
        ))}
    </div>
  )
}

export default StackNotes