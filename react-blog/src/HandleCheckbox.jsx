import { useState } from "react"

function HandleCheckbox() {
    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
      // setSkills(event.target.value, event.target.checked);// ye jo mene cheecked likh hai bo mene value check karne k liye likha hai ki value check hai ya nahi .
      if(event.target.checked){
        setSkills([...skills,event.target.value])
      }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])// iska matlab hai jo value match nahi kr rahi use rakh lo baki hata do .
      }
      
    }
    // const [skills1,setSkills1]=useState([]);
    // const handleSkills1=(event)=>{
    //   setSkills1(event.target.value, event.target.checked);
      
    // }
    // const [skills2,setSkills2]=useState([]);
    // const handleSkills2=(event)=>{
    //   setSkills2(event.target.value, event.target.checked);
      
    // }
  
  return (
    <div>
        <h1>checkboxes </h1>
        <h3>Select Your Skills</h3>
        <input type="checkbox" value="php" onChange={handleSkills} id="php" />
        <label htmlFor="php">Php</label> <br />
        <input type="checkbox" value="python " onChange={handleSkills} id="Pythonbr" />
        <label htmlFor="Pythonbr">Python</label> <br/>
        <input type="checkbox" value="c++" id="C++" onChange={handleSkills} /><label htmlFor="C++">C++</label> <br/>
        <h1>{skills}</h1>
        {/* <h1>{skills1}</h1>
        <h1>{skills2}</h1> */}
    </div>
  )
}

export default HandleCheckbox