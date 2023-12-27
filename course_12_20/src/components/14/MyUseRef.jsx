import { useEffect, useRef } from "react";
import MyInput from "./MyInput";

export default function MyUseRef() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  useEffect(() => {}, []);

  function handleClick() {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
    alert(inputRef1.current.value);
  }

  return (
    <div className="flex gap-5">
      <input type="text" ref={inputRef} className="bg-sky-300" />
      <button onClick={handleClick}>click</button>
      <MyInput ref={inputRef1} />
    </div>
  );
}
