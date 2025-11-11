import { Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import Login from "./Login"           
import About from "./About"           
import NavBar from "./NavBar"
import College from "./College"
import Department from "./Departments"
import Details from "./Details"
import Students from "./Students"
// import PageNotFound from "./PageNotFound"


function Header() {
  return (
    <div>

      {/* <NavBar/>     */}
      <Routes>
      <Route element={<NavBar/>}>
        <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />


      </Route>
        
          
            <Route path="/college" element={<College/>}>

             <Route path="department" element={<Department/>} />
             <Route path="details" element={<Details/>} />
             <Route index element={<Students/>} />

            </Route>
           
            {/* <Route path="/*" element={<PageNotFound/>}/> */}
            <Route path="/*" element={<Navigate to={"/"}/>}/> {/* yaha page redirect ho rh hai */}
            
        </Routes>
        
    </div>
  )
}

export default Header