import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";

const NavLinks = () => {
  return (
    <>
      <Link className="text-white" to="/">
        Home
      </Link>
      <Link className="text-white" to="/about-us">
        About Us
      </Link>
      <Link className="text-white" to="/services">
        Services
      </Link>
      <Link className="text-white" to="/join-the-team">
        Join the Team
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent fixed top-0 z-[20] mx-auto flex w-full items-center justify-between p-8 flex-wrap">
      <div className="flex w-1/3 justify-start items-center space-x-2">
        <Logo className="" />
        <h2 className="text-white">CodeJoy Creations</h2>
      </div>

      <div className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-end md:flex">
          <Link className="text-white" to="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? "x" : "menu"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default Navbar;
