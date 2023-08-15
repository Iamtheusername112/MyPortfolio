import "./App.css";
import Header from "./components/Header";
import ProfilePics from "./components/ProfilePics";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">User Data</div>

        <div className="hidden md:block">
          <ProfilePics />
        </div>
      </div>
    </>
  );
}

export default App;
