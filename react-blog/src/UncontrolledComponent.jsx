import { useRef } from "react";


function UncontrolledComponent() {
    const handleForm = (event)=>{
        event.preventDefault();
        const user= document.querySelector("#user").value;
        const password= document.querySelector("#password").value;
        console.log(user , password);
        
    }

    const userRef=useRef(null);
    const passwordRef=useRef(null);

    const handleFormRef=(event)=>{
        event.preventDefault();
        const user= userRef.current.value;
        const password=passwordRef.current.value;
        console.log(user, password);
        
    }


  return (
    <div>
        <h1>Un Controlled Component</h1>
        <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="enter user name "/>
        <br /><br />
        <input type="password" id="password" placeholder="enter password "/>
        <br /><br />
        <button>Submit</button>
        </form>
        <br /><br />
        <hr />
        <h1>Un Controlled Component with useRef </h1>
        <form action="" method="post" onSubmit={handleForm} >
        <input type="text" ref={userRef}  placeholder="enter user name "/>
        <br /><br />
        <input type="password" ref={passwordRef} placeholder="enter password "/>
        <br /><br />
        <button onClick={handleFormRef}>Submit with useRef </button>
        </form>


    </div>
  )
}

export default UncontrolledComponent