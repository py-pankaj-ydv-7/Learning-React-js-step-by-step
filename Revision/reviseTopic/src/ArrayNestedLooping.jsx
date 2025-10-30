import React from "react";
import College from "./College";

function ArrayNestedLooping() {
  const collegeDate = [
    {
      collegeName: "ABC College",
      city: "New York",
      website: "www.abccollege.edu",
      student: [
        { name: "John Doe", age: 20, course: "Computer Science" },
        { name: "Jane Smith", age: 22, course: "Mathematics" },
        { name: "Sam Brown", age: 21, course: "Physics" },
      ],
    },
    {
      collegeName: "XYZ University",
      city: "Los Angeles",
      website: "www.xyzuniversity.edu",
      student: [
        { name: "John Doe", age: 20, course: "Computer Science" },
        { name: "Jane Smith", age: 22, course: "Mathematics" },
        { name: "Sam Brown", age: 21, course: "Physics" },
      ],
    },
    {
      collegeName: "LMN Institute",
      city: "Chicago",
      website: "www.lmninstitute.edu",
      student: [
        { name: "John Doe", age: 20, course: "Computer Science" },
        { name: "Jane Smith", age: 22, course: "Mathematics" },
        { name: "Sam Brown", age: 21, course: "Physics" },
      ],
    },
  ];
  return (
    <>
    <h1>ArrayNestedLooping...</h1>
    <div 
    style={{
      display:"flex",
    }}
 
    >
      
  {collegeDate.map((college, index) => (
  <div key={index} style={{
  backgroundColor:"gray",
  width:"400px",
  border:"2px solid black",
  borderRadius:"10px",
  margin:"10px",
  padding:"10px",
  color:"white",
  // justifyContent:"center",
}}
   >
          {/* <collegedata college={college}/> */}
          <College college={college} />
        </div>
      ))}
    </div>
    </>
  );
  
}
export default ArrayNestedLooping;
