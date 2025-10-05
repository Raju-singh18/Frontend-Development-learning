// import { useCallback, useState } from "react";

// const Button = ({ onClick, children }) => {
//   console.log(`Renderig button: ${children}`);

//   return (
//     <button
//       className={`text-black mb-4 py-2 px-5 ${
//         children === "Increment" ? "bg-green-400" : "bg-red-400"
//       }`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };


// export default function UseCallback() {
//   const [count, setCount] = useState(0);

  // memoize the increment function
  //   const increment = () => {
  //     console.log("Increment inside");
  //     setCount((prevCount) => prevCount + 1);
  //   };
 

  // memoize the decrement function
  //   const decrement = () => setCount((prevCount) => prevCount - 1);
 

//   return (
//     <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
//       <h1 className="mb-4 text-2xl">Count:{count}</h1>
//       <Button onClick={increment}>Increment</Button>
//       <Button onClick={decrement}>Decrement</Button>
//     </div>
//   );
// }

import React, { useCallback, useState } from "react";

// ✅ Memoized Button Component
const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 mx-2 rounded ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // ✅ Memoized functions
  const increment = useCallback(() => {
    console.log("Increment function called");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrement function called");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-black text-white font-display tracking-wider">
      <h1 className="mb-4 text-2xl">Count: {count}</h1>
      <div className="flex gap-4">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
}
