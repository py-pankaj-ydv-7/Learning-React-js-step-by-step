import {  useTransition } from "react"


function UseTransitionHook() {
    const [pending,startTransition]=useTransition();
    const handleButton=async ()=>{

        startTransition(async () =>{
        await new Promise(res=>setTimeout(res,2000));

        })
        
        

        
    }

  return (
    <div>
        <h1>UseTransition Hook in React js 19</h1>
        {
            pending?<img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="gif img" />
            :null
        }
        <button disabled={pending} onClick={handleButton} >Click</button>
    </div>
  )
}

export default UseTransitionHook