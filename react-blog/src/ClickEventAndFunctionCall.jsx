function Click(){
    function callFun(){
        alert("function called")
    }

    // const fruit = (name)=>{
    //      alert(name);
    // }
    const fruit = (name)=>{
        <h1>{name}</h1>
    }


// import { useState } from "react";  // yaha me usestate use kar rha  hu 

// function Click() {
//     const [fruitName, setFruitName] = useState("");  // state banayi

//     function callFun() {
//         alert("function called");
//     }

//     const fruit = (name) => {
//         setFruitName(name);   // state update kiya
//     };



    return (
        <div>
            <h1>Event and function call</h1>
            <button onClick={callFun}>click me </button>
            <button onClick={()=>fruit("banana")}>Banana</button>
            <button onClick={()=>fruit("apple")}>Apple</button>
            {/* react me function ko call krne k liye uski diffination chahiye hoti hai na ki uski call like js me hum karte hai wese   */}
            {/* <h2>{fruitName}</h2>   ye chije use state k sath use hoti hai yaha me pahle hi try kr rah tha */}
        </div>
    )
}

export default Click;