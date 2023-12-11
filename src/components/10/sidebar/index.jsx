import { useContext } from "react";
import OptimizedLink from "./link/OptimizedLink";
import { ThemeContext } from "../../../providers/ThemeProvider";

export default function SideBar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`bg-green-200 ${
        theme === "light" ? "" : "bg-green-900 text-white"
      } transition-colors duration-300 ease-in-out`}
    >
      <div>I'm sidebar</div>
      <div className="flex flex-col gap-3 m-5">
        <OptimizedLink />
        <OptimizedLink />
        <OptimizedLink />
      </div>
    </div>
  );
}
