import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProfilePics from "./components/ProfilePics";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <Introduction />
          <About />
        </div>

        <div className="hidden md:block">
          <ProfilePics />
        </div>
      </div>
    </>
  );
}

export default App;
