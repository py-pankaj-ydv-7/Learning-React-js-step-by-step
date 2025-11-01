import { useRef, useState } from "react"

function UseRef() {
  const [name,setName]=useState('');
  const [showName,setShowName]=useState(false);
    const inputRef= useRef(null); // input controller
    const handleFocus=()=>{

        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.style.background = "lightblue";
        // inputRef.current.blur();
        
        setShowName(true);

    }
    const toggleHandler=()=>{
      if(inputRef.current.style.display!="none"){
        inputRef.current.style.display = "none"
      }
      else{
        inputRef.current.style.display = "inline"
      }
    }


  return (
    <div>
        <h1>UseRef</h1>
        <button onClick={()=>toggleHandler()}>Hide and Show input field </button>
        <input ref={inputRef} value={name}  type="text" placeholder="Enter user name" onChange={(event)=>setName(event.target.value)} />
        <button onClick={handleFocus} >Focus on Input Field</button><br /><br />
        <button onClick={() => { setName(""), setShowName(false); inputRef.current.style.background = ""}}>Clear</button>
        
        {showName && <h1>Name: {name}</h1>}
         
    </div>

  )
}

export default UseRef