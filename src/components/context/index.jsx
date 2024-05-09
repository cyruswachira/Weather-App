import axios from "axios";
import { Children, createContext, useContext, useEffect, useState } from "react";

let stateContext = createContext()

export let stateContextProvider = ({Children}) =>{
    let  [weather , setWeather] = useState({})

    let [values , setValues] = useState([])

    let [place , setPlace] = useState('Jaipur')

    let [location , setLocation] = useState('')


    let fetchWeather = async() => {
       let options = {
        method : 'GET',
        url :'https://visual-crossing-weather.p.rapidapi.com/forecast',

        params :{
            aggregateHours : '24' ,

            location : place,

            contentType : 'json',

            unitGroup  : 'metric',

            shortColumnNames : 0,


        },

        headers : {
            'X-RapidAPI-Key' : import.meta.env.VITE_API_KEY,

             "X-RapidAPI-Host" : 'visual-crossing-weather.p.rapidapi.com'
        }


       }

       try{
        let response = await axios.request(options)

        console.log(response.data);

        let thisData = Object.values(response.data.location)[0]

        setLocation(thisData.address)

        setValues(thisData.values)

        setWeather(thisData.values[0])

       }catch(e){
        console.error(e);
        alert('error')
       }
    }

    useEffect(() => {

        // fetchWeather()


    },[place]) 

    useEffect(() => {

        console.log(values);


    },[values]) 

    return(
       <stateContext.Provider value={{
        weather,

        setPlace,

        values,

        location,

       }}>
        {Children}
       </stateContext.Provider> 
    )



}

export let useStateContext = () => useContext(stateContext)