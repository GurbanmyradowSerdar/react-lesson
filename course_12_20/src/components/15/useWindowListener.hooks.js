import { useEffect } from "react";

export function useWindowListener(event, listener) {
  useEffect(() => {
    window.addEventListener(event, listener);

    return () => {
      window.removeEventListener(event, listener);
    };
  }, [event, listener]);
}
