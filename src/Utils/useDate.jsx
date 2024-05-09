import React , {useEffect, useState} from "react";


export let useDate = () => {

    let locale = 'en'

    let [today , setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() =>{
            setDate(new Date())
        }, 60*1000)
        return function cleanup() {
            clearInterval(timer)
        }
        
    },[])

    let day = today.toLocaleDateString(locale , {weekday : 'long'})

    let date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale , {month : 'long'})}\n\n`

     let time = today.toLocaleDateString(locale , {hour : 'numeric' , hour12 : true , minute : 'numeric'})


     return(date , time)


}