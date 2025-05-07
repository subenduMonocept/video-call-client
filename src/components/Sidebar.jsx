import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";
import { FaPhone, FaPhoneSlash, FaRegCopy } from "react-icons/fa";
import { copyToClipboard } from "../utils/clipboard";

const Sidebar = ({ children }) => {
  const { callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-0">
      <div className="border-2 border-black p-6 rounded shadow">
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Account Info</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 
                rounded focus:outline-none focus:ring-2 
                focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setCopied(copyToClipboard())}
                className="w-full bg-blue-600 text-white 
                mt-4 py-2 px-4 rounded flex items-center 
                justify-center gap-2"
              >
                <FaRegCopy />
                {copied ? "Copied!" : "Copy Your ID"}
              </button>
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Make a call</h2>
              <input
                type="text"
                placeholder="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full bg-green-600 text-white mt-4
                  py-2 px-4 rounded flex items-center justify-center gap-2"
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
