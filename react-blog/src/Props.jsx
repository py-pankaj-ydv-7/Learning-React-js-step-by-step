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

import College from "./College"
import User from "./User"

function Props() {
    // let userName= "Shubham Yadav"
    // let age = 23;
    // let email ="shubham@1234.com"

    let userObject={
        name:"Rohit Yadav",
        age:"15",
        email:"roladon05@gmail.com",
    }
    let userObject2={
        name:"Sanjay Yadav",
        age:"15",
        email:"roladon05@gmail.com",
    }

    let collegeName=["rjit, "," iit, "," mit, "," itm, "," mits, ",]

  return (
    <div>
        <h1>Props in React Js</h1>
    <College name={collegeName}/>
        {/* <User name="pankajYadav" age={24} email="pankajyadav851685@gmail.com" employeeId={2563370} Team="Shoapstream" TeamLead="Samarth Saxena" /> Yaha humne ise static tarike se pass kiya hai  */}
        {/* <User name={userName} age={age} email={email} employeeId={2563370} Team="Shoapstream" TeamLead="Samarth Saxena" /> */}

        {/* yaha me chije object me daal k pass kar rh hu */}
        <User user={userObject}/>
        <User user={userObject2}/>
    </div>
  )
}

export default Props