import { useState } from "react";

export default function InputComponent() {
  const [text, setText] = useState("default");
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="p-20">
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("")}>Reset</button>
      <button
        onClick={() => {
          setCount(count + 1);
          const nextValue = count + 1;
          console.log(nextValue);
        }}
      >
        +1
      </button>
    </div>
  );
}
