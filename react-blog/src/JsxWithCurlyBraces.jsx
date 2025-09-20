function Ap(){
    const name = "Pankaj Yadav";
    const userObj = {
        name: "pankaj",
        email: "afdj@gmail.com",
        age : 24
    }

    const userArray = ["same", "pankaj","layla","marc"];

    // use html tag property with jsx ;
    let path ="https://images.pexels.com/photos/19321355/pexels-photo-19321355.jpeg";

    let x = 41;
    let y = 22;
    function fruit(){
        return "Apple"
    }
    function sum(a,b){
        return (a+b);
    }
    function operation(a,b,op){
    
        if(op === "+"){
            return a+b;
        } else if (op === "-"){
            return a-b;
        } else {
            return a*b;
        }
    }
    return (
        <div>
            <h1>Jsx with Curly Braces {name}</h1>
            <h2>{name?name:"user not found"}</h2>
            <h2>{y+x}</h2>
            {fruit() }
            {sum(x,y)}
            <h1>{operation(7,5,"")}</h1>
            
            {"yaha me object print kara rh hu"}
            
            <h1>{userObj.age}</h1>
            <h1>{userObj.name}</h1>
            <h1>{userObj.email}</h1>

            {" yaha me apna array print kara rh hu "}
            {/* <h1>{userArray.map((val)=>{
                return val  
            })}</h1> */}

            <h1>{userArray[1]}</h1>
            <img src={path} style={{height:200, width : 400}} alt="image hai yaha" />
    
        </div>
    )
}
export default Ap;