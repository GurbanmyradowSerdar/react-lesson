import ButtonComponent from "./ButtonComponent";

export default function StateComponent() {
  console.log("is rerendered");
  return (
    <div className="p-20 text-6xl">
      <ButtonComponent />
    </div>
  );
}
