import { useState } from "react"

function HandleCheckbox() {
    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
      setSkills(event.target.value, event.target.checked);
      
    }
  
  return (
    <div>
        <h1>checkboxes </h1>
        <h3>Select Your Skills</h3>
        <input type="checkbox" value="php" onChange={handleSkills} id="php" />
        <label htmlFor="php">Php</label> <br />
        <input type="checkbox" value="python " onChange={handleSkills} id="Pythonbr" />
        <label htmlFor="Pythonbr">Python</label> <br/>
        <input type="checkbox" value="c" id="C++" onChange={handleSkills} /><label htmlFor="C++">C++</label> <br/>
        <h1>{skills}</h1>
        {/* <h1>{python}</h1>
        <h1>{c}</h1> */}
    </div>
  )
}

export default HandleCheckbox