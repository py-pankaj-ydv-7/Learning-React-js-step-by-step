
import { useState } from "react"
function UpdatingObjInState() {
    const [data,setData]=useState({
        name:'Anil',
        address:{
            city:'delhi',
            country:'India',
        }
    })

    const handleName=(val)=>{
        console.log(val);
        
        data.name=val
        setData({...data})
    }

    const handleCity=(city)=>{
        data.address.city=city;
        console.log(data);
        setData({...data,address:{...data.address,city}})
       
        

    }

  return (
    <div>
        <h1>Updating Obj In States</h1>
        <input type="text" placeholder="update a name " onChange={(event)=>handleName(event.target.value)} />
        <input type="text" placeholder="update City " onChange={(event)=>handleCity(event.target.value)} />
            <h3>Name:{data.name}</h3>
        <h3>City:{data.address.city}</h3>
        <h3>Country:{data.address.country}</h3>
    
    </div>
  )
}

export default UpdatingObjInState