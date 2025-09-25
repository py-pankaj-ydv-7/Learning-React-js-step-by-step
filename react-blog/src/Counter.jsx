import { useState } from "react";
// const Counter = ()=>{
//     const [count,setCount]= useState(0);
//     const [rcount,setRcount]=useState(0);
//     // setCount =
//     return (
//         <div>
//         <h1>Counter:{count}</h1>
//         <h1>Counter:{rcount}</h1>
//         <button onClick={()=>setCount(count+1)}> Update Counter </button>
//         <button onClick={()=>setRcount(rcount-1)}> Reverse Counter </button>
//         </div>
//     )}
// ab me yaha ek esa conter variable banane wala hu jo badega or ghatega or reset ho jayega ek hi state ka use karke .
// export default Counter;

function Counter() {
  const [count, setCount] = useState(0);
  // const increase=()=>{
  //     setCount(count+1);
  // }
  // const decrease=()=>{
  //     setCount(count-1);
  // }
  // const reset=()=>{
  //      setCount (0);
  // }
  return (
    <div>
      <h1> this is counter variable, Increase, Decrease , reset, </h1>
      <h1>counter: {count}</h1>
      {/* <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
