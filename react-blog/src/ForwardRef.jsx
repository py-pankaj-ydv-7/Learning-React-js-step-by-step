import { useRef } from "react"


function ForwardRef() {
    const inputRef=useRef(null);

    const updateInput=()=>{
        inputRef.current.focus();
        inputRef.current.value="1000";
    }
  return (
    <div>
        <h1>ForwardRef</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={updateInput}>Update Input Field </button>
    </div>
  )
}

export default ForwardRef