import { useMemo, useState } from "react";
import data from "./data.json";
import List from "./List";

export default function CustomUseMemo() {
  const [isActive, setIsActive] = useState(false);

  console.log(performance.now(), "start");

  // let filteredData = data.filter((item) => item.id % 2 === 0);

  let filteredData = useMemo(
    () => data.filter((item) => item.id % 2 === 0),
    []
  );

  const searchOptions = useMemo(
    () => ({ matchMode: "whole-word", text: text }),
    [text]
  );

  const children = useMemo(
    () =>
      filteredData.map((item, i) => {
        return (
          <div key={i}>
            {item.email}
            {item.id}
          </div>
        );
      }),
    []
  );

  console.log(performance.now(), "end");

  return (
    <div className="space-y-5">
      {/* <List data={filteredData} /> */}
      {children}
      <button onClick={() => setIsActive(!isActive)}>click me</button>
    </div>
  );
}
