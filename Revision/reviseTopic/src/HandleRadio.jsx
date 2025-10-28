import React, { useState } from 'react'

function HandleRadio() {
    const [gender,setGender]=useState("female");
    const [city,setCity]=useState("Noida")
    const selectCity=(event)=>{
        return(
            setCity(event.target.value)
        )
    }
  return (
    <div>
        <h1>
            Handle Radio button
        </h1>
        <input type="radio" value="male" id='male'name='gender'onChange={(event)=>setGender(event.target.value)} checked={gender == "male"} />
        <label htmlFor="male">Male</label>
        <input type="radio" value={"female"} id='female' name='gender' onChange={(event)=>setGender(event.target.value)} checked={gender == "female"}/>
        <label htmlFor="female">Female</label>
        <br /><br />
        <h1>Gender is : {gender}</h1>
        <br /><br />
        <h1>select your city</h1>
        <select name="" id="" defaultValue="noida" onChange={selectCity}>
            <option value="delhi" >Delhi</option>
            <option value="noida" >Noida</option>
            <option value="gurgaon" >Gurgaon</option>
        </select>
        <br />
<h1>your city : {city}</h1>
    </div>
  )
}

export default HandleRadio