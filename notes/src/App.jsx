import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import StackNotes from './components/StackNotes'

const App = () => {
  const [notes, setNotes] = useState([])



  return (
    <div className='sm:h-screen '>
      <Navbar />
      <div className='max-w-4xl'>
        <Form notes={notes} setNotes={setNotes}/>
        <StackNotes notes={notes} />
      </div>
    </div>
  )
}

export default App