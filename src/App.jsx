import { useState } from "react";
import { stringArray } from "./components/9/data";

let index = 0;

function App() {
  const [name, setName] = useState(false);

  function handleClick() {
    index = index + 1;
    console.log(index);
  }
  console.log("rendered");

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center gap-10">
      <button className="text-2xl" onClick={handleClick}>
        click to update
      </button>
      <button onClick={() => setName(!name)}>update state</button>
      {<p>{stringArray[index]}</p>}
      {index}
    </div>
  );
}

export default App;
