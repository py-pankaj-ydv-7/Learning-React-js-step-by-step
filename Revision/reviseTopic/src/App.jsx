// import { useState } from 'react';
// import HandleRadioButton from './HandleRadio';
// import MultipleCondition from "./MultipleConditon";
// import "./App.css";
// import GetInputField from "./GetInputField";
// import Checkbox from "./Checkbox";
// import Counter from "./Counter";
// import Toggle from './Toggle';
// import Footer from './Footer'
// import Header from './Header'
// import Hero from './Hero'
// import Loopp from './Loop';

import UseEffectPropshandle from "./UseEffectPropshandle";
// import UseEffedt from "./UseEffedt";

// import ArrayNestedLooping from "./ArrayNestedLooping";

function App() {
  // const [count, setCount] = useState(0)
  // let name = "Pankaj Yadav";
  // // objects
  //   const user = {
  //   name: "Pankaj",
  //   age: 22,
  //   skills: ["HTML ", " CSS ", " JavaScript ", " React"]
  // };

  // function fruit() {
  //   return "Apple";

  // }
  // let a=12;
  // let b =43;

  // function sum(a,b){
  //   return a+b;
  // }

  // function operation(a,b){
  //   return a+b;
  // }
  // function opereatio(a,b,op){
  //   if(op==="+"){
  //     return a+b;
  //   }
  //   else if (op==="-"){
  //     return a-b
  //   }
  //   else{
  //     return "kuch or type kr bhai galat kiy hai "
  //   }
  // }
  // function callFun(){
  //   alert("function called")
  // }

  {
    /******************************* state ********************************/
  }

  // const [fruit,setFruit]=useState("Apple");

  // let fruit ="Apple";
  // const handleFruit=()=>{

  //   setFruit  (fruit === "Apple"?"Banana":"Apple")
  // }
  // const handleFruit2=()=>{

  //   setFruit  ("Apple")
  // }

  // let [fruit, setFruit] =useState ("Apple");

  return (
    <>
      {/* <Header/> */}
      {/* <h1>Hello i'm Pankaj Yadav </h1>
      <h2>learning react , this is my Revision folder, where i revise my all topics those i learn  </h2> */}
      {/* <Hero/>
      <Footer/> */}
      {/* {name.toUpperCase()}
      <br />
      {user.skills}
      <h1>{fruit()}</h1>
      <h1>{a+b}</h1>
      <h1>{sum(3,6)}</h1>
      {
        opereatio(2,5,"+")
      }
      <br />

      <button onClick={callFun}>onClick to alert! </button> */}

      {/* {
       name==="shubham "?<h1>me true hu </h1> :<h1>me else wala hu </h1>
      }
      <h1>this is {operation(3,5)}</h1> */}
      {/* <h1>State in React Js</h1> */}
      {/* {
        fruit
      } */}
      <br />
      {/* so here i used to single button to change fruit name , so how ,ans i used condition */}
      {/* <button onClick={handleFruit}>Change In to Banana</button> */}
      {/* <button onClick={handleFruit2}>Change In to Apple</button> */}
      <br />
      {/* <Counter/> */}

      {/* Yaha me Toggle or Hide and Show seek raha hu  */}
      {/* <Toggle /> */}
      {/* <MultipleCondition/> */}
      {/* <h1>Get input Value here !</h1> */}
      {/* <GetInputField/> */}
      {/* <Checkbox/> */}
      {/* <HandleRadioButton/> */}
      {/* <Loopp/> */}
      {/* <ArrayNestedLooping/> */}
      {/* <UseEffedt/> */}
      <UseEffectPropshandle/>
    </>
  );
}

export default App;
