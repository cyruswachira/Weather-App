import React, { useState } from 'react'
import Forecast from './components/Forecast.jsx'

function App() {

  let [data , setData] = useState()

  let API_KEY = "08dead54eae17a7e45d013b4a4358b59"

  let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${API_KEY}`

  return (
    <>
     <Forecast  title= "HOURLY FORECAST"/>

     <Forecast  title= "DAILY FORECAST"/>

    </>
  )
}

export default App