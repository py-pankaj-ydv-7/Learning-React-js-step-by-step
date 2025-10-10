import { useState } from "react"


function ControlledComponent() {
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
  return (
    <div>
        <h1>Controlled Component</h1>

        {/* <form action="" method="get"> */}
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter Name" />
            <br /><br />
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="enter Password" />
            <br /><br />
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="enter email" />
            <br /><br />
            <button>Submit</button>
            <button onClick={()=>{setEmail("");setName(""); setPassword("")}}>Clear</button>
        {/* </form>/ */}
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>


    </div>
  )
}

export default ControlledComponent