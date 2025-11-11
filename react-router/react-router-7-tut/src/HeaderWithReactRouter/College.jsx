import { NavLink, Outlet } from "react-router";


export default function College() {
  return (
    <div className="college" style={{textAlign:"center"}}>
        <h2>College</h2>
        <NavLink className="link" to="student" >Students</NavLink>
        <NavLink className="link" to="department" >Department</NavLink>
        <NavLink className="link" to="details">College Details</NavLink>
        <Outlet/>
      
    </div>
  )
}
