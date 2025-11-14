// Routes and pages for UserList and user Ui...
import { Routes, Route, NavLink } from "react-router"
import UserAdd from "./UserAdd"
import UserList from "./UserList"
import "../index.css"

export default function RoutesAndPages() {
  return (
    <div>
        <ul className="nav-list">
            <li>
                <NavLink to="/list" >List</NavLink>
            </li>
            <li><NavLink to="/add">Add User</NavLink></li>
        </ul>


        {/* <h1>Make Routes and Pages for Add User and User List UI</h1> */}
        {/* <UserList/> */}
        <Routes>
            <Route path="list" element={<UserList/>} />
            {/* <Route path="add" element={<UserAdd/>} /> */}
        </Routes>
        <UserAdd/>
      
    </div>
  )
}
