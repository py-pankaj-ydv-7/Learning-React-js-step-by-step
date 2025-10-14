import { useState } from "react"


function Getfeild() {
    const [val,setVal]= useState("")
    const [pass,setPass]= useState("")
    const [email,setEmail]= useState("")
  return (
    <div>
        <h1>Get input field</h1>
       name: <input type="text" value={val} placeholder="enter a name " onChange={(event)=>setVal(event.target.value)} />        <br /><br />
        password: <input type="password" value={pass} placeholder="enter a password " onChange={(event)=>setPass(event.target.value)} />        <br /><br />
       Email: <input type="email" value={email} placeholder="enter a email " onChange={(event)=>setEmail(event.target.value)} />        <br /><br />
        <button onClick={()=>{setVal(""); setEmail(""); setPass("")}}>clear</button>
        <br />
        <h1>{val}</h1>
        <h1>{pass}</h1>
        <h1>{email}</h1>
    </div>
  )
}
// homework done
export default Getfeild