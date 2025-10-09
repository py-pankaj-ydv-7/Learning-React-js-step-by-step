// import React, { useState } from "react";

// function Toggle() {
//   // const [display, setDisplay]=useState(true);
//   const [color, setColor] = useState("red");
//   const hideShow = () => {
//     // setDisplay (!display)
//     setColor(color === "red" ? "white" : "red");

//     console.log("button clicked");
//   };
//   return (
//     <div>
//       <h1>Toogle</h1>
//       <div className="papaBox">
//         {/* <div className="box" id='box'>{display?"display":""}</div> */}
//         <div
//           className="box"
//           id="box"
//           style={{ backgroundColor: color, color: "black" }}
//         >
//           Display
//         </div>
//       </div>
//       <button onClick={hideShow}>Hide and Show</button>
//     </div>
//   );
// }

// export default Toggle;


// toggle or Hide and show in React Lecture  #16

import { useState } from "react";
import User from "./User";

function Toggle(){
  const [display,setDisplay]=useState(true)
  return(
    <div>
      <h1>Toggle in React js by lecture code step by step </h1>

      <button onClick={()=>setDisplay(!display)}>Hide and Show</button>

      {
        display?<User/>:null
      }
      
      

    </div>
  )
}

export default Toggle;