import ThemeProvider from "./providers/ThemeProvider";
import Main from "./components/10/main";
import SideBar from "./components/10/sidebar";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center gap-10">
      <p className="text-7xl">Root</p>

      <ThemeProvider>
        <AuthProvider>
          <div className="flex gap-10">
            <SideBar />
            <Main />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
