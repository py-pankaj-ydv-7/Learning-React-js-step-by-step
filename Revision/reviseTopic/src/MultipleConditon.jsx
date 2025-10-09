import React, { useState } from 'react'

const MultipleConditon = () => {
    const [count , setCount ]=useState(0);
  return (
    <div>
        <h1>MultipleConditon</h1>
        <h1> {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Reset</button>


        {/*  to is tarah se multiple condition laga sakte hai  */}

        {
            count===0?<h3>this is condition 0 </h3>
            :count===1?<h3>this is conditon 1</h3>
            :count===2?<h3>this is conditon 2</h3>
            :count===3?<h3>this is conditon 3</h3>
            :count===4?<h3>this is conditon 4</h3>
            :count===5?<h3>this is conditon 5</h3>
            :count===-1?<h3>this is condition -1</h3>
            :count===-2?<h3>this is condition -2</h3>
            :count===-3?<h3>this is condition -3</h3>
            :count===-4?<h3>this is condition -4</h3>
            :count===-5?<h3>this is condition -5</h3>
            :<h1>Other Condition</h1>
        }

    </div>
  )
}

export default MultipleConditon