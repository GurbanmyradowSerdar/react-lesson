import { useCallback } from "react";

export default function UseCallbackComponent({ id }) {
  const showId = useCallback(() => {
    alert(id);
  }, []);

  return (
    <div>
      <button onClick={showId}>show id</button>
    </div>
  );
}
