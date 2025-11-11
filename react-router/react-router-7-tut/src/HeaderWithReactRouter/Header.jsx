import { Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import Login from "./Login"           
import About from "./About"           
import NavBar from "./NavBar"
// import PageNotFound from "./PageNotFound"


function Header() {
  return (
    <div>

      <NavBar/>    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/*" element={<PageNotFound/>}/> */}
            <Route path="/*" element={<Navigate to={"/"}/>}/> {/* yaha page redirect ho rh hai */}
            
        </Routes>
        
    </div>
  )
}

export default Header