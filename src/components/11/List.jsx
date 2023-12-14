import { memo } from "react";

function List({ data }) {
  return (
    <div className="p-10">
      {data.map((item, i) => {
        return (
          <div key={i}>
            {item.email}
            {item.id}
          </div>
        );
      })}
    </div>
  );
}

export default memo(List);
