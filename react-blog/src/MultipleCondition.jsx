import { useState } from "react";
function multipleCondition() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Multiple condition in React js </h1>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Counter</button>
      <button onClick={() => {setCount(count - 1)}}>Decrease Counter</button>
      <button onClick={() => {setCount(0)}}>Reset Counter</button>
      {
      count == 0? <h1>Conditon 0</h1> 
      :count == 1? <h1>condition 1</h1>
      :count == 2? <h1>condition 2</h1>
      :count == 3? <h1>condition 3</h1>
      :count == 4? <h1>condition 4</h1>
      :<h1>Other condition</h1>
      }
    </div>
  );
}

export default multipleCondition;
