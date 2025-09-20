
// jsx exercie for practice 

function Todo(){
  return(
    <div>
        Hello Todo Component
      <h1>Anil sidhu Todos</h1>
      <img src="https://images.pexels.com/photos/33538828/pexels-photo-33538828.jpeg"  style={{ width: 300, height: 200 }}  alt="anil sidhu"/>

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFum}>Click me</button>

      
    </div>
  )
}
  function callFum() {
        return (alert("hello is it function called"))    
      } 

export default Todo;