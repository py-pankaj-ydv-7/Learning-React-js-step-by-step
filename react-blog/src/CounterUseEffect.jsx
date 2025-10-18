import { useEffect } from "react";


function CounterUseEffect({count,data}) {
    const getCounter = ()=>{
        console.log("call only");
        
    }
    useEffect(()=>{
        getCounter();
        
    },[])
    /// life cycle method.

    useEffect(()=>{
      console.log("mounting phase only ");
      
    },[])

    useEffect(()=>{
      console.log("Update phase only ");
      
    },[count])

    // this code will run on unmount.

    useEffect(()=>{
      return ()=>{
        console.log("unmount phase only ");
      }
      
    },[])


  return (
    <div>
        <h1>Counter Value :{count}</h1>
        <h1>Data Value : {data}</h1>
    </div>
  )
}

export default CounterUseEffect