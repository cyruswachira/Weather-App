import axios from "axios";
import { Children, createContext, useState } from "react";


let stateContext = createContext()


export let stateContextProvider = ({Children}) => {
    let [weather , setWeather] = useState({})

    let [values , setValues] = useState([])

    let [place , setPlace] = useState('Jaipur')

    let [location , setLocation] = useState('')
}