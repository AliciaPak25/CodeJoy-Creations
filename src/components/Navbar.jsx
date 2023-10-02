import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";
import mail from "../assets/icons/mail.svg";
import menu from "../assets/icons/menu-2.svg";
import cross from "../assets/icons/square-rounded-x.svg";

const NavLinks = ({ toggleNavbar }) => {
  let { pathname } = useLocation();
  let routeName = pathname.split("/")?.[1];

  function activeNavLink(type = null) {
    if (routeName === "") {
      routeName = "home";
    }

    let classes = "";

    if (type === routeName) {
      classes += `text-white border-b-2 ${
        routeName === "home"
          ? "border-b-[#406aff]"
          : routeName === "about-us"
          ? "border-b-[#3bace2]"
          : routeName === "services"
          ? "border-b-[#b935ee]"
          : routeName === "services"
          ? "border-b-[#ff56f6]"
          : "border-b-primary"
      }`;
    }

    return classes;
  }
  return (
    <>
      <Link
        className={`${activeNavLink(
          "home"
        )} text-grayText text-sm py-2 md:py-0 hover:text-white hover:border-b-2 hover:border-b-[#406aff]`}
        to="/"
        onClick={toggleNavbar}
      >
        Home
      </Link>
      <Link
        /*  className="" */
        className={`${activeNavLink(
          "about-us"
        )} text-grayText text-sm py-2 md:py-0 hover:text-white hover:border-b-2 hover:border-b-[#3bace2]`}
        to="/about-us"
        onClick={toggleNavbar}
      >
        About Us
      </Link>
      <Link
        className={`${activeNavLink(
          "services"
        )} text-grayText text-sm py-2 md:py-0 hover:text-white hover:border-b-2 hover:border-b-[#b935ee]`}
        to="/services"
        onClick={toggleNavbar}
      >
        Services
      </Link>
      <Link
        className={`${activeNavLink(
          "join-the-team"
        )} text-grayText text-sm py-2 md:py-0 hover:text-white hover:border-b-2 hover:border-b-[#ff56f6]`}
        to="/join-the-team"
        onClick={toggleNavbar}
      >
        Join the Team
      </Link>
      <Link
        className={`${activeNavLink(
          "contact"
        )}text-grayText text-sm md:hidden py-2 hover:text-white hover:border-b-2 hover:border-b-primary`}
        to="/contact"
        onClick={toggleNavbar}
      >
        Contact
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  let { pathname } = useLocation();
  let routeName = pathname.split("/")?.[1];

  function activeNavLink(type = null) {
    let classes = "";

    if (type === routeName) {
      classes += "text-white border-b-2 border-b-primary";
    }

    return classes;
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-transparent absolute top-0 z-[20] mx-auto flex w-full items-center justify-between md:p-6 flex-wrap padding-0">
      <div className="flex w-1/3 justify-start items-center space-x-2 pl-2 pt-2 md:pl-0 md:pt-0">
        <Logo />
        <h2
          className="text-white font-bold text-base sm:flex hidden cursor-pointer"
          onClick={handleClick}
        >
          CodeJoy Creations
        </h2>
      </div>

      <div className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-end items-center md:flex">
          <img src={mail} alt="mail-icon" className="mr-1" />
          <Link
            className={`${activeNavLink(
              "contact"
            )} text-grayText text-sm hover:text-white hover:border-b-2 hover:border-b-primary`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <button onClick={toggleNavbar} className="text-white z-[1] pr-2">
            {isOpen ? (
              <img src={cross} alt="cross-icon" className="h-10 w-10" />
            ) : (
              <img src={menu} alt="menu-icon" className="h-10 w-10" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center justify-center bg-backgroundApp top-0 lef-0 right-0 w-full absolute h-screen">
          <NavLinks className="text-grayText" toggleNavbar={toggleNavbar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
