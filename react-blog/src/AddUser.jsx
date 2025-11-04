// import { useState } from "react"

function AddUser({setUser}) {
    
  return (
    <div>
        <h1>Add User {}</h1>
        <input type="text" placeholder="enter a user name" onChange={(event)=>setUser(event.target.value)} />
        <hr />
    </div>
  )
}

export default AddUser