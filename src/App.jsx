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
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </>
  );
};

export default App;
