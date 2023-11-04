import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col text-7xl">
      <Header title="hello its props" className="hello" />
      <Main>
        <div className="text-sky-600 italic">
          hello im inside the main component
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
