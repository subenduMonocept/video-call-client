import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div
          className="flex justify-around items-center 
        bg-gray-100 p-4 rounded shadow-md"
        >
          <h1 className="text-xl font-semibold">{call.name} is calling:</h1>
          <button
            onClick={answerCall}
            className="bg-blue-600 text-white px-4 
            py-2 rounded hover:bg-blue-700 transition"
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
