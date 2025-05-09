import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {stream && (
        <div
          className="border-2 border-black p-4 
        m-2 w-full max-w-md sm:max-w-lg"
        >
          <div className="w-full">
            <h5
              className="text-xl font-semibold 
            mb-2"
            >
              {name || "Name"}
            </h5>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="w-full rounded"
            />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div
          className="border-2 border-black p-4 m-2 
        w-full max-w-md sm:max-w-lg"
        >
          <div className="w-full">
            <h5 className="text-xl font-semibold mb-2">
              {call.name || "Name"}
            </h5>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="w-full rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
