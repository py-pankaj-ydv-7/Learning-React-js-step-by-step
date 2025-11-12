import { Link } from "react-router"

export default function Users() {
  const userList=[
    {id:1,name: 'Pankaj'},
    {id:2,name: 'summi'},
    {id:3,name: 'Gullu'},
    {id:4,name: 'Kariya'},
    {id:5,name: 'lala'},
    {id:6,name: 'pillu,tillu'},
  ]
  return (
    <div>
      <h1>users List page</h1>
      <div style={{marginLeft:"10px" }}>
      {
        userList.map((item,index)=>(    
          <h2 key={index}><Link to={"/user/users/"+item.id}>{item.name}</Link> </h2>
        ))
      }
      
    </div>
  
    </div>
  )
}
