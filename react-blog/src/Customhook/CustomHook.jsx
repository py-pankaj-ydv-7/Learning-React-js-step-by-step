import useToggle from "./UseToggle"

function CustomHook() { 
    const [value,toggleValue]=useToggle(true);
    const [data,setData]=useToggle(true);
    console.log("value ------ ",value);
    
  return (
    <div>
        <button onClick={toggleValue}>Toggle Heading </button><br /><br />
        <button onClick={()=>toggleValue(false)}>Hide Heading</button><br /><br />
        <button onClick={()=>toggleValue(true)}>Show Heading</button><br /><br />
        
        {
            value? <h1>CustomHook</h1>:null
        }
        <hr />
        <button onClick={setData}>Toggle Heading</button>
        <button onClick={()=>setData(false)}>Hide Heading</button>
        <button onClick={()=>setData(true)}>Show Heading</button>
        {
            data?<h1>Second Heading</h1>:null
        }
        <hr /><hr />
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

    </div>
  )
}

export default CustomHook