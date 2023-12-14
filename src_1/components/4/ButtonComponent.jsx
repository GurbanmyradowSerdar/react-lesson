import { useState } from "react";

export default function ButtonComponent() {
  const [greeting, setGreeting] = useState(staticFunc);
  const [someObj, setSomeObj] = useState({
    hello: "hi",
    name: "meylis",
    age: 20,
  });

  function staticFunc() {
    return [1, 2, 3, 4, 5];
  }

  function handleGreeting() {
    setGreeting(greeting + 3);
    console.log(greeting + 3);

    setSomeObj({
      age: 20,
      hello: "hi",
      name: "John",
    });
  }

  return (
    <>
      <button onClick={handleGreeting}>counter +1</button>
      <h1>{greeting}</h1>
    </>
  );
}
