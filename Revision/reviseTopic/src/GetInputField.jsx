import React, { useState } from 'react'

function GetInputField() {
    const [val,setVal]=useState();

  return (
    <div>
       Comment: <input type="text" value={val} placeholder='Write something here !' onChange={(event)=>setVal(event.target.value)}  />
       <br />
       <h1>{val}</h1>
       <button onClick={()=>setVal("")}>clear</button>
    </div>
  )
}

export default GetInputField