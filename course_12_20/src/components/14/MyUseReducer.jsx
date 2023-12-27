import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        age: state.age++,
      };

    case "decrement":
      return {
        ...state,
        age: state.age--,
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function MyUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    name: "Serdar",
    age: 20,
  });

  return (
    <div className="bg-sky-500 px-3 py-2 rounded-md flex flex-col text-white gap-3 items-center border-4 border-white">
      <p className="text-3xl font-semibold">{state.name}</p>
      <p className="text-3xl font-semibold">{state.age}</p>
      <div className="flex items-center gap-3 *:text-xl *:px-2 *:py-1 *:bg-green-500">
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      </div>
    </div>
  );
}
