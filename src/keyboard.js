function Keyboard({Handleaction,Handlecalculate,Handleclear})
{
return(
 <div className="keypad">
    <div className="row">
        <button className="digit"onClick={()=>{Handleaction("7")}}>7</button>
        <button className="digit"onClick={()=>{Handleaction("8")}}>8</button>
        <button className="digit"onClick={()=>{Handleaction("9")}}>9</button>
        <button className="digit"onClick={()=>{Handleaction("/")}}>/</button>
    </div>
    <div className="row">
        <button className="digit"onClick={()=>{Handleaction("4")}}>4</button>
        <button className="digit"onClick={()=>{Handleaction("5")}}>5</button>
        <button className="digit"onClick={()=>{Handleaction("6")}}>6</button>
        <button className="digit"onClick={()=>{Handleaction("*")}}>*</button>
    </div>
    <div className="row">
        <button className="digit"onClick={()=>{Handleaction("1")}}>1</button>
        <button className="digit"onClick={()=>{Handleaction("2")}}>2</button>
        <button className="digit"onClick={()=>{Handleaction("3")}}>3</button>
        <button className="digit"onClick={()=>{Handleaction("+")}}>+</button>
    </div>
    <div className="row">
        <button className="digit"onClick={()=>{Handleaction("0")}}>0</button>
        <button className="digit"onClick={()=>{Handlecalculate("")}}>=</button>
        <button className="digit"onClick={()=>{Handleclear()}}>c</button>
        <button className="digit"onClick={()=>{Handleaction("-")}}>-</button>
    </div>
 </div>
)
}
export default Keyboard