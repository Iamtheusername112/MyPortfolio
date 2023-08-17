import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProfilePics from "./components/ProfilePics";
import ProgressBar from "./components/ProgressBar";
import Services from "./components/Services";
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
          <Services />
        </div>

        <div className="hidden md:block">
          <ProgressBar />
          <ProfilePics />
        </div>
      </div>
    </>
  );
}

export default App;
