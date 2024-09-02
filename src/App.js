import { useState } from "react"
import Keyboard from "./keyboard"
function App()
{
    let [input,setinput]=useState("")
    function Handleaction(value)
    {
   setinput(input+value)
    }
function Handlecalculate(value)
{
    let output=eval(input)
    setinput(output)
}
function Handleclear()
{
    setinput("")
}
    return(
        <div className="container">
           <div className="calculator">
           <input type="text" className="display"value={input}></input>
           <Keyboard Handleaction={Handleaction} Handlecalculate={Handlecalculate} Handleclear={Handleclear}></Keyboard>
           </div>
        </div>
    )
}
export default App