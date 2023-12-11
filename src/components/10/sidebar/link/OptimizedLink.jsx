import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Link from "./index";

function OptimizedLink() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="p-10 bg-orange-400">
      <Link setTheme={setTheme} />
    </div>
  );
}

export default OptimizedLink;
