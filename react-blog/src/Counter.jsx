import { useState } from "react";

// const Counter = ()=>{
//     const [count,setCount]= useState(0);
//     const [rcount,setRcount]=useState(0);
//     // setCount = 
//     return (
//         <div>
//         <h1>Countert:{count}</h1>
//         <h1>Countert:{rcount}</h1>
//         <button onClick={()=>setCount(count+1)}> Update Counter </button>
//         <button onClick={()=>setRcount(rcount-1)}> Reverse Counter </button>
//         </div>
//     )

// }

// ab me yaha ek esa conter variable banane wala hu jo badega or ghatega ek hi state ka use karke .

const Counter = ()=>{
    const [count,setCount]= useState(0);
    const Increase =()=>{
        setCount (count+1)
    }
    const Decrease =()=>{
        setCount  (count-1)
    }
    const Reset =()=>{
       setCount (0)
    }
     (
        <div>
            <h1>Counter value = {count}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;