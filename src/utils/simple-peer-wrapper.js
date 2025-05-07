import SimplePeer from "simple-peer";

const createPeer = (opts) => {
  if (typeof window !== "undefined") {
    window.global = window;
  }
  return new SimplePeer(opts);
};

export default createPeer;
