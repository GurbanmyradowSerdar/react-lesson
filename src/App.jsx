import { useState, useCallback } from "react";
import InputComponent from "./components/8/memo-usage/InputComponent";
import AddInputComponent from "./components/8/memo-usage/AddInputComponent";
import WrapperComponent from "./components/8/useCallback-usage/WrapperComponent";
import ChildrenPropComponent from "./components/8/useCallback-usage/ChildrenPropComponent";

function App() {
  // const [isClicked, setIsClicked] = useState(false);
  // const [items, setItems] = useState([
  //   {
  //     id: 0,
  //     value: "",
  //   },
  //   {
  //     id: 1,
  //     value: "",
  //   },
  //   {
  //     id: 2,
  //     value: "",
  //   },
  // ]);

  // const handleChangeValue = useCallback(
  //   (id, value) =>
  //     setItems((prev) =>
  //       prev.map((item) => {
  //         if (item.id === id) {
  //           item.value = value;
  //         }

  //         return item;
  //       })
  //     ),
  //   []
  // );

  // const handleClickAdd = (value) => {
  //   setItems((prev) => [...prev, { id: prev[prev.length - 1].id + 1, value }]);
  // };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center gap-10">
      {/* <AddInputComponent handleClickAdd={handleClickAdd} />
      <button className="text-6xl" onClick={() => setIsClicked(!isClicked)}>
        click me
      </button>

      <div className="grid grid-cols-6 gap-5">
        {items.map((item, i) => (
          <InputComponent
            {...item}
            key={i}
            handleChangeValue={handleChangeValue}
          />
        ))}
      </div> */}

      <WrapperComponent>
        <ChildrenPropComponent />
        {/* it wont re render children while wrapper */}
        component re-rendered
      </WrapperComponent>
    </div>
  );
}

export default App;
