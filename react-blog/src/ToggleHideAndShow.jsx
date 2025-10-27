import { useState } from "react";
// import User from "./User";

function Toggle() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>Toggle in React js</h1>
      {
                // display?(<h1>Pankaj yadav <button onClick={()=>{setDisplay(!display)}}>Hide Name</button></h1>):(<button onClick={()=>{setDisplay(!display)}}>Show Name</button>)
                display? <h1>Pankaj Yadav</h1>:null
            }
            <button onClick={()=>{setDisplay(!display)}}>Hide pankaj yadav</button> 
            <button onClick={()=>{setDisplay(!display)}}>show pankaj yadav</button>
          
      {/* <button onClick={() => setDisplay(!display)}>Toggle</button> */}
      {/* {display ? <User /> : null} */}
    </div>
  );
}

export default Toggle;

// function Toggle2() {
//     const [display, setDisplay] = useState(true);
//     return (
//         <div>
//             <h1>this is toogle2 made by me </h1>
//             {
//                 display ? <h1>Pankaj yadav</h1> : null
//             }
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//         </div>
//     );
// }

// export default Toggle2;
