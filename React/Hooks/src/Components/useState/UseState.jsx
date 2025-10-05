
import React, { useState } from 'react'

const UseState = () => {
  const [count,setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    console.log("inner",count);
  };

  console.log("outer",count);
  
  return (
    <div> 
      <h1>useState Hook</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default UseState;
