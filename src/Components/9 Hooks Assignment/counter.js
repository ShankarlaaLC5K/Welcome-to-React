import React,{useState} from "react";
import './counter.css';
function Counter(){
    const[firstNumber,setFirstNumber]=useState(0);
    return(
        <>
        <div className="text-center counterback">
            <h1 className="text-success">Calculations</h1>
            <h1 className="text-white">{firstNumber}</h1>
            <button onClick={()=>setFirstNumber(firstNumber+1)} className="btn btn-success countbutton m-3">INCREMENT</button><br/>
            {/* <button onClick={()=>setFirstNumber(firstNumber-1)} className="btn btn-danger">-</button>*/}
            <button onClick={()=>setFirstNumber(firstNumber*0)} className="btn btn-warning countbutton m-3">RESET</button> 
        </div>
        </>
    )
};
export default Counter;