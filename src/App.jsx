import ErrorButton from "./components/7/ErrorButton";
import EventsComponent from "./components/7/EventsComponent";
import FormBehavior from "./components/7/FormBehavior";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-32">
      <ErrorButton onClick={() => console.log("hello")}>
        <div className="w-20 h-20 bg-red-50 rotate-90 flex items-center justify-center">
          <p>hello</p>
          <p>world</p>
          <p className="bg-yellow-400 rounded-full">:)</p>
        </div>
      </ErrorButton>
      <EventsComponent />
      <FormBehavior />
    </div>
  );
};

export default App;
