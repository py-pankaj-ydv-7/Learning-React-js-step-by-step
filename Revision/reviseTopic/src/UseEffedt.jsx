import React, {  useEffect, useState } from 'react'

function UseEffedt() {

    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);


    useEffect(()=>(
        callOnce()

    ),[count])

    function callOnce(){
        console.log("Function called")
    }
    

  return (
    <div>
        <h1>Use Effect Hook</h1>
    <button onClick={()=>setCount(count+1)}>count:{count}</button>
    <button onClick={()=>setData(data+1)}>data:{data}</button>


    </div>
  )
}

export default UseEffedt