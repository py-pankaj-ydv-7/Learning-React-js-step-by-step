import { useContext } from "react"
import { SubjectContext } from "./ContextData";

function Subject() {
    const subject =useContext(SubjectContext);
  return (
    <div style={{backgroundColor:"red", padding:"10px"}}>
       
        <h1>Subject component: {subject}</h1>
    </div>
  )
}

export default Subject