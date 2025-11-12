import { NavLink ,Outlet} from "react-router";

import  './header.css'

export default function NavBar() {
  return (
   <div>
     <div className="header">
        <div className="NavLink" to={"/"}><NavLink><h2>LOGO</h2></NavLink></div>
        <div >
            <ul>
                <li>
                    <NavLink className="link" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to={"/user/login"}>Login</NavLink>
                </li>

                {/* nested navigation  */}
                <li>
                    <NavLink className="link" to={"/user/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink className="link" to={"/user/users"}>Users</NavLink>
                </li>
                <li>
                    <NavLink className="link" to={"/user/users/list"}>List</NavLink>
                </li>
                <li>
                    <NavLink className="link" to={"/college"}>College</NavLink>
                </li>
            </ul>
        </div>
      
    </div>
    <Outlet/>
   </div>
  )
}
