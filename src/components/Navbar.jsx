import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md p-4">
      <h2 className="text-center">Video App</h2>
    </nav>
  );
};

export default Navbar;
