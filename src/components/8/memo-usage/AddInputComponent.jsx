import { useState } from "react";
import { memo } from "react";

function AddInputComponent({ handleClickAdd }) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-10">
        <p>add input component</p>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button
        onClick={() => handleClickAdd(value)}
        className="bg-blue-400 p-2 rounded-sm text-lg text-white"
      >
        add component
      </button>
    </div>
  );
}

export default AddInputComponent;
