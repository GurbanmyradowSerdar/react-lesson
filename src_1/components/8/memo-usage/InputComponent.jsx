import { memo } from "react";

function InputComponent({ id, value, handleChangeValue }) {
  return (
    <div className="flex flex-col gap-10 p-10 rounded-xl">
      <p className="text-lg text-pink-700 font-medium">
        Re-render {Math.round(Math.random() * 100)}
      </p>
      <input
        type="text"
        className="border border-gray-200"
        value={value}
        onChange={(e) => handleChangeValue(id, e.target.value)}
      />
    </div>
  );
}

export default memo(InputComponent);
