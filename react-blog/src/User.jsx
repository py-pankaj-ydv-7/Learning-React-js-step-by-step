

function User({user}){
     console.log(user)
    //  console.log(user.name)
    return (    
        <div>
            <h1>Employee Component</h1>
            <hr /><br />
            {/* <h1>Employee name :  {data.user.name}</h1>
            <h1>Employee Age :  {data.user.age}</h1>
            <h1>Employee email :  {data.user.email}</h1> */}
            <h1>Employee Age :  {user.name}</h1>
            <h1>Employee Age :  {user.age}</h1>
            <h1>Employee email :  {user.email}</h1>
            <hr />
            {/* <h1>Employee Age :  {age}</h1>
            <h1>Employee email :  {email}</h1> */}
            {/* <h1>Employee Team :  {data.Team}</h1>
            <h1>Employee TeamLead :  {data.TeamLead}</h1>
            <h1>Employee ID :  {data.employeeId}</h1> */}
        </div>
    )
}

export default User;