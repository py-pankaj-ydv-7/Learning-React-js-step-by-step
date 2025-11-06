import { useState } from "react";

function UpdatingArrayInState() {
  const [data, setData] = useState([
    "pankaj",
    "sam",
    "peter",
    "Tony",
    "Steave",
  ]);

  const [datadetails,setDatadetails]=useState([
    {name:'pankaj',age:'24'},
    {name:'sam',age:'34'},
    {name:'peter',age:'14'},
  ])

  const hadleUser = (name) => {
    data[data.length-1]=name;
    console.log(data);
    setData([...data])
  };


  const hadleAge = (age) => {
    datadetails[datadetails.length-1].age=age;
    console.log(datadetails);
    setDatadetails([...datadetails])
  };
  return (
    <div>
      <h1>Updating Array In State</h1>
      <input
        type="text"
        placeholder="enter last user name"
        onChange={(event) => hadleUser(event.target.value)}
      />
      {/* <h1>{data}</h1> */}
    
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />

      <input
        type="text"
        placeholder="enter last user age"
        onChange={(event) => hadleAge(event.target.value)}
      />
      {
        datadetails.map((name,index)=>(
            <>
            
            <h3 key={index}>{name.name}, {name.age}</h3>
           
            </>
        ))
      }


    </div>
  );
}

export default UpdatingArrayInState;
