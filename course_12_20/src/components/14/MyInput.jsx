import { forwardRef } from "react";

const MyInput = forwardRef(({}, ref) => {
  return <input className="bg-sky-300" type="text" ref={ref} />;
});

export default MyInput;
