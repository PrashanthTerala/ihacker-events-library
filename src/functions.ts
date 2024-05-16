import axios from "axios"
import { EventProps } from "./types"
import { error } from "console"

export const sendEvent = ({message} : EventProps) => {
    axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response=> console.log(JSON.stringify(response.data))).catch(error=>{
        console.log(error)
    })
    console.log("Sending an event..."+message)
}

export const printEvent = ({message} : EventProps) => {
    axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response=> console.log(JSON.stringify(response.data))).catch(error=>{
        console.log(error)
    })
    console.log("Printing an event..."+message)
}