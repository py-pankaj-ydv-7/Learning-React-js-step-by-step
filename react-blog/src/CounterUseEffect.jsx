import { useEffect } from "react";


function CounterUseEffect({count,data}) {
    const getCounter = ()=>{
        console.log("call only");
        
    }
    useEffect(()=>{
        getCounter();
        
    },[count,data])
  return (
    <div>
        <h1>{count}</h1>
        <h1>{data}</h1>
    </div>
  )
}

export default CounterUseEffect