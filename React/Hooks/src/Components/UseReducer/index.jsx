import { useReducer, useState } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }

    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if(action.type === "RESET"){
        return (state = 0);
    }
  };

  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  // console.log(useReducer(reducer , 0));

  return (
    <>
      <div
        className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center
        items-center bg-gray-700 text-white"
      >
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};
