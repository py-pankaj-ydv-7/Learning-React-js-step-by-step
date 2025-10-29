import DropDawnClolor from "./DropDawnClolor"
import { useState,useEffect } from "react"


function Clock() {
    const [time,setTime]=useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
        <h1>Digital clock</h1>
        
        
        <DropDawnClolor clock={<h2>{time.toLocaleTimeString()}</h2>}/>
    </div>

  )
}

export default Clock