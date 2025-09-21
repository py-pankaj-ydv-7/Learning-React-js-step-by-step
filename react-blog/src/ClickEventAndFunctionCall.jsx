function Click(){
    function callFun(){
        alert("function called")
    }

    const fruit = (name)=>{
         alert(name);
    }
    return (
        <div>
            <h1>Event and function call</h1>
            <button onClick={callFun}>click me </button>
            <button onClick={()=>fruit("banana")}>Banana</button>
            <button onClick={()=>fruit("apple")}>Apple</button>
            {/* react me function ko call krne k liye uski diffination chahiye hoti hai na ki uski call like js me hum karte hai wese   */}
        </div>
    )
}

export default Click;