import { useState } from "react";

function HadleRadioAndDropdown() {
  const [gender, setGender] = useState("Female");
  const [city,setCity] = useState("delhi");
  const handleCity=(event)=>{
    console.log(setCity(event.target.value));
  };
    
  return (
    <div>
      <h1>HadleRadio And Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        value={"Male"}
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="Male"
       checked={gender == "Male"}
      />
      <label htmlFor="Male">Male</label>
      <input
        type="radio"
        value={"Female"}
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="Female"
        checked={gender == "Female"}
      />
      <label htmlFor="Female">Female</label>
      <br />
      <br />
      <h1>Selected Gender: {gender}</h1>
      <br />
      <br />
      <br />
      <h4>Select City</h4>
      <select name="" id="" defaultValue={"delhi"} onChange={handleCity}>
        <option value="noida" >Noida</option>
        <option value="gurgaon" >Gurgaon</option>
        <option value="delhi" >Delhi</option>
      </select><br />
      <h3>Selected city: {city}</h3>
    </div>
  );
}

export default HadleRadioAndDropdown;
