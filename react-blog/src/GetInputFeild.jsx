// import React from 'react'

import { useState } from "react"

function GetInputFeild() {
    const [val,setVal]=useState("Pankaj Yadav")
  return (
    <div>
        <h1>Get Input field Value</h1>
        <input type="text"value={val} placeholder="enter a User name " onChange={(event)=>setVal(event.target.value)}/>
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>Clear</button>
    </div>
  )
}

export default GetInputFeild