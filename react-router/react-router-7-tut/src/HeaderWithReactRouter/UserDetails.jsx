import { useParams } from "react-router"
import { Link } from "react-router";


export default function UserDetails() {

  const paramData=useParams();
  console.log(paramData.id);
  
  
  return (
    <div>
      <h1>UserDetails</h1>
      <Link to={"/user/users"}>Back</Link>
      <h2>User id is :{paramData.id}</h2>
    </div>
  )
}
