import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextData"

function ContextApi() {
  const [val,setVal]=useState("")
  return (
    <>
    <div style={{backgroundColor:'yellow', padding:"10px"}}>
    
    <SubjectContext.Provider value={val} >
      <select name="" id="" value={val} onChange={(event)=>setVal(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="maths">Maths</option>
        <option value="history">History</option>
        <option value="english">English</option>
        <option value="science">Science</option>
      </select>
      <h1>ContextApi</h1>
      <button onClick={()=>setVal("")}>clear</button>

      <College/>
    </SubjectContext.Provider>
    
      </div>
    </>
  )
}

export default ContextApi