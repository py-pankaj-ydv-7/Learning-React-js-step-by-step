/* ************* Props **************/
/*
what is props?
Make Component '
Pass data between components
>var, object , array
Receive and Display Data.
Pass data in component with click
interview Question
*/

// import { useState } from "react"
// import College from "./College"
// import Student from "./Student"
// import User from "./User"
// import User2props from "./User2props"
import Wrapper from "./Wrapper"


function Props() {
    // let userName= "Shubham Yadav"
    // let age = 23;
    // let email ="shubham@1234.com"

    // let userObject={
    //     name:"Rohit Yadav",
    //     age:"15",
    //     email:"roladon05@gmail.com",
    // }
    // let userObject2={
    //     name:"Sanjay Yadav",
    //     age:"15",
    //     email:"roladon05@gmail.com",
    // }

    // let collegeName=["rjit, "," iit, "," mit, "," itm, "," mits, ",];
    // let StudentName=["sam","tom ","herry ","marq"];
    // const [student,setStudent]=useState()

  return (
    <div>
        <h1>Props in React Js</h1>
    {/* <College name={collegeName}/> */}
    {/* <button onClick={()=>setStudent("sam")}>click</button> */}
    {/* <h1>{student}</h1> */}
    {/* {student && <Student Name={student}/>} yaha humne check kiya condition */}
        {/* <User name="pankajYadav" age={24} email="pankajyadav851685@gmail.com" employeeId={2563370} Team="Shoapstream" TeamLead="Samarth Saxena" /> Yaha humne ise static tarike se pass kiya hai  */}
        {/* <User name={userName} age={age} email={email} employeeId={2563370} Team="Shoapstream" TeamLead="Samarth Saxena" /> */}

        {/* yaha me chije object me daal k pass kar rh hu */}
        {/* <User user={userObject}/> */}
        {/* <User user={userObject2}/> */}

        <h1>Advance concept of props</h1>
        <hr />
        <Wrapper color="red" width="500px">
            <h1>Hello everyOne</h1>
            <h1>Hello everyOne2</h1>
        </Wrapper> is tarike se hum html pass kar sakte hai , even kuch bhi ye children ban gaya hai children ki tarh kaam karega
         <Wrapper color="blue">
            <h1>Hello Pankaj </h1>
        </Wrapper>
         <Wrapper>
            <h1>Hello Yadav ji </h1>
        </Wrapper> 
        {/* <User2props name="Pankaj Yadav"/>
        <User2props name="Marq Yadav"/>
        <User2props name="kariya" age="14"/> */}
    </div>
  )
}

export default Props