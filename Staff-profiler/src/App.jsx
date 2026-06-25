import React from 'react'

const App = () => {
  let arr = [10,20,30,40,50]
  
  return (
	<div>
	{arr.map(function(elem){
		return <h1>{elem*2}</h1>
	})}
  </div>
  )
}

export default App