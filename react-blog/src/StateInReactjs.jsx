import { useState } from "react";
import Counter from "./Counter"
function State(){
    const [fruit, setFruit] = useState("Apple");
    // const handleFruit=()=>{
    //     setFruit("banana");
    // }
    return (
        <div>
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button onClick={()=>{setFruit("banana")}}>Change fruit Name</button>
            <Counter/>
            
        </div>
    )

}
export default State;