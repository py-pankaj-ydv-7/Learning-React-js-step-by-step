import './App.css'
// import Footer from './Footer'
// import Header from './Header'
// import Hero from './Hero'

function App() {
  // const [count, setCount] = useState(0)
  let name = "Pankaj Yadav";
  // objects 
    const user = {
    name: "Pankaj",
    age: 22,
    skills: ["HTML ", " CSS ", " JavaScript ", " React"]
  };

  // function operation(a,b){
  //   return a+b;
  // }

  return (
    <>
    {/* <Header/> */}
      {/* <h1>Hello i'm Pankaj Yadav </h1>
      <h2>learning react , this is my Revision folder, where i revise my all topics those i learn  </h2> */}
      {/* <Hero/>
      <Footer/> */}
      {name.toUpperCase()}
      <br />
      {user.skills}
      {/* {
       name==="shubham "?<h1>me true hu </h1> :<h1>me else wala hu </h1>
      }
      <h1>this is {operation(3,5)}</h1> */}

    </>
  )
}

export default App
