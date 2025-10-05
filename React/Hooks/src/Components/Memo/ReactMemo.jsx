
import React, { useMemo, useState } from "react";
import Counts from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const myBioData = useMemo(() => {
    return {
        name:"Raju",
        age:22,
    }
  },[]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 font-display tracking-wider">
      <h1 className="text-2xl font-bold mb-4">{count}</h1>
      <button
        className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    
      <Counts myBioData={myBioData}/>
    </div>
  );
};

export default ReactMemo;

