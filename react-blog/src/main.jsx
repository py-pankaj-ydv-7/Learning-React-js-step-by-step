// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import "tailwindcss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
// import BrowserRouter from "react-router"
import { BrowserRouter } from "react-router";




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
    
  

)
