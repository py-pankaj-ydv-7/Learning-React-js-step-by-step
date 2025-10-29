import { useState } from "react"


function DropDawnClolor({clock}) {
    const [color,setColor]=useState("blue")
    const handleColor = (event)=>{
        setColor(event.target.value)
    }
  return (
    <div>
    <h1 style={{color:color, backgroundColor:"black", width:"250px", borderRadius:"10px" }}>{clock}</h1>
        <p style={{color:color}}>DropDawnClolor </p>
        <select value={color} name="" id="" defaultValue={"blue"} onChange={handleColor}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="pink">pink</option>
        </select>
    </div>
  )
}

export default DropDawnClolor