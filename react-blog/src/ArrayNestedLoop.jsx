// import Students from "../Students";
import College from "./College";

function ArrayNestedLoop() {
  const collegeData = [
    {
      name: "Iet alwar",
      city: "Alwar",
      website: "www.ite.com",
      student: [
        {
          name: "Pankaj Yadav",
          age: "24",
          email: "pankaj@1234.com",
        },
        {
          name: "Pankaj Yadav2",
          age: "24",
          email: "2pankaj@1234.com",
        },
        {
          name: "Pankaj Yadav3",
          age: "24",
          email: "3pankaj@1234.com",
        },
      ],
    },
    {
      name: "RJIT Tekanpur",
      city: "Tekanpur",
      student: [
        {
          name: "peter",
          age: "23",
          email: "peter@1234.com",
        },
        {
          name: "2peter",
          age: "23",
          email: "2peter@1234.com",
        },
        {
          name: "3peter",
          age: "23",
          email: "3peter@1234.com",
        },
      ],
    },
    {
      name: "MITS Gwalior",
      city: "Gwalior",
      student: [
        {
          name: "Bruce",
          age: "25",
          email: "bruce@1234.com",
        },
        {
          name: "2Bruce",
          age: "25",
          email: "2bruce@1234.com",
        },
        {
          name: "3Bruce",
          age: "25",
          email: "3bruce@1234.com",
        },
      ],
    },
  ];
  return (
    <div >
      {/* <h1>Array Nested Loop with component</h1> */}
      {

      collegeData.map((college,index)=>(
        <div key={index} > 
    <College college={college}/>
            
        </div>
      ))
      }
    </div>
  );
}

export default ArrayNestedLoop;
