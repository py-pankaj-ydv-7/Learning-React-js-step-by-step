import React, { useEffect, useState } from 'react'

function Counter(){
    const [count,setCount]=useState(0)
    // const updateValue=()=>{
    //     setCount (count+1)
    // }

    const oneCall = ()=>{
      console.log("ek baar chal rh hu");
      
    }

    // oneCall();

    useEffect(()=>(
      oneCall()
    ),[])


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter;