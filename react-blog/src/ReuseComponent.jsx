import UserReuse from "./UserReuse"


function ReuseComponent() {
      const userData = [
        {
            name:"Pankaj Yadav",
            age : 24,
            id: 1,
            email: "1@124",
        },
        {
            name:"Shubham Yadav",
            age : 23,
            id: 2,
            email:"2@124",
        },
        {
            name:"Goutam Yadav",
            age : 17,
            id: 3,
            email: "3@124",
        },
        {
            name:"Rohit Yadav",
            age : 15,
            id: 4,
            email:"4@124",
        },
        {
            name:"Sanjay Yadav",
            age : 14,
            id: 5,
            email:"5@124",
        },
    ]
  return (
    <div>
        <h1>Reuse Component</h1>
        {
            userData.map((user)=>(
                <div key={user.id}>
                    <UserReuse data={user}/>
                </div>
            ))
        }

    </div>
  )
}

export default ReuseComponent