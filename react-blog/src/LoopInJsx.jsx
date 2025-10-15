
function LoopInJsx() {
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
        <h1>Loop In Jsx with Map Function </h1>
        <table border={"1"}>
            <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
            </tr>
            </thead>
            <tbody>
                {
                userData.map((item)=>(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
            </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default LoopInJsx