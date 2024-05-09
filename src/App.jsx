import React, { useState } from 'react'

function App() {

  let [input , setInput] = useState('')


  return (
    <div className='w-full h-screen text-white'>
    <nav className='w-full p-3 flex justify-between items-center'>
      <h1 className='font-bold tracking-wide text-3xl'>Weather Forecast</h1>
      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <input onKeyUp={(e) => {if(e.key === 'enter'){
        
        //sumit the form
        }}} type="text" placeholder='Search' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)}/>
      </div>
      </nav>  
    </div>
  )
}

export default App