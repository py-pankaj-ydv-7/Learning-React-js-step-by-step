import { Link } from "react-router"
import  './header.css'

export default function NavBar() {
  return (
    <div className="header">
        <div className="link" to={"/"}><Link><h2>LOGO</h2></Link></div>
        <div >
            <ul>
                <li>
                    <Link className="link" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="link" to={"/login"}>Login</Link>
                </li>

                {/* nested navigation  */}
                <li>
                    <Link className="link" to={"/about"}>About</Link>
                </li>
                <li>
                    <Link className="link" to={"/college"}>College</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}
