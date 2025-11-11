import { Route, Routes } from "react-router"
import Home from "./Home"
import Login from "./Login"           
import About from "./About"           
import NavBar from "./NavBar"


function Header() {
  return (
    <div>

      <NavBar/>    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            
        </Routes>
        
    </div>
  )
}

export default Header