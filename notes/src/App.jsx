import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Notes from './components/notes'

const App = () => {
  return (
    <div className='bg-gray-400 h-screen'>
      <Navbar />
      <Form />
      <Notes />
    </div>
  )
}

export default App