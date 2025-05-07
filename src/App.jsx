import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="min-h-screen">
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </>
  );
};

export default App;
