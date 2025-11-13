import { useEffect, useState } from "react";
import "../index.css"

export default function IntegrationJson() {
  const [userData,setUserData]=useState([]);
  // yaha ye state me loader dikhane k liye use kr rh hu .
  const [ loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true);
    getUserData();
    
  },[])
  const getUserData = async()=>{
    const url ="http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false)
    
  }
  return (
    <div>
        <h1>Integration Json Server API and Loader</h1>
             <ul className="user-list user-list-head">
              <li>Name</li>
              <li>Age</li>
              <li>Email</li>
            </ul>
        {
          !loading?
          userData.map((user,index)=>(
            // <h2 key={index}>{user.name}</h2>
            <ul key={index} className="user-list">
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
            </ul>
          ))
          :<h1>Loading data...</h1>
        }
      
    </div>
  )
}
