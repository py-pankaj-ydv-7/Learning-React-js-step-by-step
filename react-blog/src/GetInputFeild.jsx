// // import React from 'react'

import { useState } from "react";

// import { useState } from "react"

// function GetInputFeild() {
//     const [val,setVal]=useState("Pankaj Yadav")
//   return (
//     <div>
//         <h1>Get Input field Value</h1>
//         <input type="text"value={val} placeholder="enter a User name " onChange={(event)=>setVal(event.target.value)}/>
//         <h1>{val}</h1>
//         <button onClick={()=>setVal("")}>Clear</button>
//     </div>
//   )
// }

// export default GetInputFeild

// practice ki thi me yaha
// const GetInputFeild = () => {
//   const [value, setValue] = useState("");
//   return(
//     <div>
//       <h1>input field</h1>
//       <label htmlFor="name">Name : </label>
//       <input type="text" id="name" value={value} placeholder="enter a name " onChange={(event)=>setValue(event.target.value)}/>
//       <h2>{value}</h2>
//       {
//         console.log(value)

//       }

//       <button onClick={()=>setValue("")}>clear</button>

//     </div>
//   )
// }

// export default GetInputFeild;

// task kr raha hu
// teen iput field leni hai or state k under store krni hai or console or ui pe show krni nai

const GetInputFeild = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <h1>Task: store 3 input value </h1>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        value={name}
        id="name"
        placeholder="enter a name "
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="age">Age : </label>
      <input
        type="number"
        value={age}
        id="age"
        placeholder="enter your age"
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label htmlFor="address">Address : </label>
      <input
        type="address"
        value={address}
        id="address"
        placeholder="enter your address"
        onChange={(event) => setAddress(event.target.value)}
      />
      <br /><br />
      <button onClick={()=>{setAddress(""); setAge("") ;setName("")}}>clear all</button>
      {/* {console.log(name)}
      {console.log(age)}
      {console.log(address)} */}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{address}</h1>
    </div>
  );
};
export default GetInputFeild;
