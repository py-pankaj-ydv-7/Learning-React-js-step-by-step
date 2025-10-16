// function College({name}) {
//     console.log(name);

import Students from "../Students";

//   return (
//     <div>
//         <h2>College: {name}</h2>
//     </div>
//   )
// }

// nested loop wala college hai ye .

const College = ({college}) => {
  return (
    <div style={{
      backgroundColor:"#ccc",
      padding: "20px",
      borderRadius: "10px",
      margin: "20px",
      width:"800px",
      borderBottom: "2px solid #000",

    }}>
      <h1>College Name: {college.name}</h1>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>website: {college.website}</h3>
        </li>
        <li>
          {/* <h3>Students</h3> */}
          {/* {
            college.student.map((student)=>(
              <ul>
                <li>Name:{student.name}</li>
              </ul>
            ))
          } */}
          <Students students={college.student}/>
        </li>
       
      </ul>
    </div>
  );
};

export default College;
