import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import StackNotes from './components/StackNotes'

const App = () => {
  return (
    <div className='sm:h-screen '>
      <Navbar />
      <div className='max-w-4xl'>
        <Form />
        <StackNotes />
      </div>
    </div>
  )
}

export default App