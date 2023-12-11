import { memo } from "react";

function Link({ setTheme }) {
  return (
    <div className="bg-sky-600 text-white flex flex-col gap-2">
      <p>I'm some link inside side bar</p>
      <button onClick={setTheme} className="text-2xl">
        to change theme
      </button>
    </div>
  );
}

export default memo(Link);
