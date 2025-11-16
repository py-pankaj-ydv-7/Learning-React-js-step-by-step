import { useEffect, useState } from "react";
import "../index.css"

export default function UserList() {
  const [userData,setUserData]=useState([]);
  // yaha ye state me loader dikhane k liye use kr rh hu .
  const [ loading,setLoading]=useState(false);
  const url ="http://localhost:3000/users";
  useEffect(()=>{
    setLoading(true);
    getUserData();
    
  },[])
  const getUserData = async()=>{
    // const url ="http://localhost:3000/users"; // mene bhar likh diya hai stats k pass ise 
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false)
  }

  const deleteUser= async(id)=>{
    let response = await fetch(url+"/"+id,{
      method:"delete",
    })
    response = await response.json();
    if(response){
      alert("record deleted")
    }
    
  }


  return (
    <div>
        <h1>Make Routes and Pages for Add User and User List UI</h1>
             <ul className="user-list user-list-head">
              <li>Name</li>
              <li>Age</li>
              <li>Email</li>
              <li>Action</li>
            </ul>
        {
          !loading?
          userData.map((user,index)=>(
            // <h2 key={index}>{user.name}</h2>
            <ul key={index} className="user-list">
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
              <li><button onClick={()=>deleteUser(user.id)}>Button</button></li>
            </ul>
          ))
          :<h1>Loading data...</h1>
        }
      
    </div>
  )
}
