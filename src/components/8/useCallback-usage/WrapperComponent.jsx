import { useState } from "react";
import UseCallbackComponent from "./UseCallbackComponent";
import ChildrenPropComponent from "./ChildrenPropComponent";

export default function WrapperComponent({ children }) {
  const [id, setId] = useState("default");

  return (
    <div className="flex flex-col gap-10 bg-red-50">
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <UseCallbackComponent id={id} />
      <ChildrenPropComponent />{" "}
      {/* ! it re render while using this, go to app.tsx to see solution*/}
      {children}
    </div>
  );
}
