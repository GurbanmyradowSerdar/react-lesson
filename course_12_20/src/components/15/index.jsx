import { useEffect, useState } from "react";
import { useWindowListener } from "./useWindowListener.hooks";

export default function MyUseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState("success");

  useWindowListener("mousemove", (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  });

  useEffect(() => {
    async function fetchData() {
      setStatus("loading");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=dae9cdbf07b5a28386c7447cf914ce6e&units=metric`;
      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        setStatus("error");
      } finally {
        setStatus("success");
      }
    }

    fetchData();
  }, []);

  if (status === "error") return <h1 className="text-9xl">error :(</h1>;

  if (status === "loading") return <h1 className="text-9xl">loading</h1>;

  return (
    <div className="text-3xl text-black">
      <div
        className="size-10 bg-red-400 rounded-full absolute -top-5 -left-5"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      useEffect
    </div>
  );
}
