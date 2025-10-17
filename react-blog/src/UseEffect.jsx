import { useEffect, useState } from "react";
import CounterUseEffect from "./CounterUseEffect";

function UseEffect() {
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);

   
    function counterFunction(){
        console.log("counterFunction",count);
        
    }

    function callOnce(){
        console.log("callOnce function called");
        
    }
    useEffect(()=>{
        // callOnce();
         counterFunction();
    },[count])
  return (
    <div>
        <h1>UseEffect Hook</h1>
        
        <button onClick={()=>setCount(count + 1)}>Counter</button>
        <button onClick={()=>setData(data + 1)}>Data</button>
        {/* <h1>{count}</h1>
        <h1>{data}</h1> */}
        <CounterUseEffect count={count} data={data} />
    </div>
  )
}

export default UseEffect