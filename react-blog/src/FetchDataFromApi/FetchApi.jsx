import { useEffect, useState } from "react";

import "../index.css";



export default function FetchApi() {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        getUsersData()

    },[]) 

   const getUsersData = async ()=>{
    const url ="https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json()
    // console.log(response);
    setUserData(response.users)    

    }
    
    
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Fetch data from API</h1>
        <ul className="user-list user-list-head">
                    <li>FirstName</li>
                    <li>LastName</li>
                    <li>Age</li>
                </ul>

        {
            userData && userData.map((user)=>(
                // <h3>{user.firstName}</h3>
                <ul className="user-list">
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.age}</li>
                </ul>
            ))
        }

       
      
    </div>
  )
}
