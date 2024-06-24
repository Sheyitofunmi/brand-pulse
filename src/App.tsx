import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid min-h-screen w-full   ">
      <Sidebar />
      <div className="flex flex-col bg-[] lg:pl-[220px]">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:px-5  lg:gap-6 lg:py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
// md:grid-cols-[220px_1fr]
