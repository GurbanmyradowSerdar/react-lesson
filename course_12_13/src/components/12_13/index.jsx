import { useCallback, useState } from "react";

function SimpleComponent() {
  const [data, setData] = useState([1]);

  const children = data.map((item, i) => (
    <div
      key={i}
      className="flex flex-col space-y-3 bg-green-200 p-5 border border-black rounded-lg"
    >
      <p>{item}</p>
      <button onClick={() => handleClickRemoveChild(i)}>delete</button>
      <button onClick={() => handleClickIncrement(i)}>add +1</button>
    </div>
  ));

  function handleClickIncrement(currentIndex) {
    setData((prev) =>
      prev.map((item, i) => {
        if (i === currentIndex) {
          return item + 1;
        } else {
          return item;
        }
      })
    );
  }

  function handleClickRemoveChild(currentIndex) {
    setData((prev) => prev.filter((item, i) => i !== currentIndex));
  }

  // ! add method
  const handleClick = useCallback(function handleClick() {
    setData((prev) => [...prev, 20]);
  }, []);

  // ! removing method
  // const handleClick = useCallback(function handleClick() {
  //   setData((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  // }, []);

  return (
    <div className="flex space-x-20 items-center">
      {children}
      <button
        className="bg-sky-400 px-4 py-2 text-white rounded-lg"
        onClick={handleClick}
      >
        Set array
      </button>
    </div>
  );
}

export default SimpleComponent;
