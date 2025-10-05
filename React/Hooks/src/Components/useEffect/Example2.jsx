import React, { useEffect, useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);
  

//   useEffect(() => {
//     console.log("Count value: ", { count });
//   }, []);

  useEffect(() => {
    console.log("Count value: ", { count });
  }, [count]);

 

  return (
    <div>
      <h1>useEffect hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example2;
