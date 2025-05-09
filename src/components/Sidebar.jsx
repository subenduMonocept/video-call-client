import React, { useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { FaPhone, FaPhoneSlash, FaRegCopy } from "react-icons/fa";
import { copyToClipboard } from "../utils/clipboard";
import { showToast } from "../utils/toast";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!me) {
      showToast.error("Your ID is not available yet");
      return;
    }
    const success = await copyToClipboard(me);
    setCopied(success);
  };
  console.log(me);
  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-0">
      <div className="border-2 border-black p-6 rounded shadow">
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Account Info</h2>
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 
                rounded focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                autoComplete="name"
              />
              <button
                type="button"
                onClick={handleCopy}
                disabled={!me}
                className={`w-full mt-4 py-2 px-4 rounded flex items-center 
                justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white`}
              >
                <FaRegCopy />
                {copied ? "Copied!" : "Copy Your ID"}
              </button>
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Make a call</h2>
              <input
                id="callId"
                name="callId"
                type="text"
                placeholder="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="off"
              />
              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  onClick={leaveCall}
                  className="w-full bg-red-600 text-white mt-4 py-2 
                  px-4 rounded flex items-center justify-center gap-2"
                >
                  <FaPhoneSlash />
                  Hang Up
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => callUser(idToCall)}
                  disabled={!me || !idToCall}
                  className={`w-full mt-4 py-2 px-4 rounded flex items-center 
                  justify-center gap-2 bg-green-600 hover:bg-green-700
                  text-white`}
                >
                  <FaPhone />
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
