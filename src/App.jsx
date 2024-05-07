import React, { useState } from 'react'
import Forecast from './components/Forecast.jsx'

function App() {

  let [data , setData] = useState({})

  let [location , setLocation] = useState("")

  let API_KEY = "08dead54eae17a7e45d013b4a4358b59"

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
   

  function searchLocation(){}
  return (
    <>
      <div className='w-full h-full relative'>
     
     <div className='text-center p-4'>
      <input type="text"  className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-100 text-black focus:outline-none' placeholder='Enter Location' value = {location} onChange={(e) => setLocation(e.target.value)} onKeyDownCapture={searchLocation}/>
     </div>
               
      </div>

    </>
  )
}

export default App