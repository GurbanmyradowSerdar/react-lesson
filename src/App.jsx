import Avatar from "./components/4/Avatar";
import FormComponent from "./components/5/FormComponent";
import InputComponent from "./components/5/InputComponent";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-32">
      {/* <InputComponent /> */}
      {/* <FormComponent /> */}

      <div className="flex items-center gap-10">
        {["windows-1.jpg", "windows-2.jpg", "windows-3.jpg"].map((item, i) => (
          <Avatar
            key={i}
            alt={item}
            src={`/images/${item}`}
            height={300}
            width={300}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
