import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Links",
    links: [
      {
        id: "1",
        name: "Home",
        link: "/",
      },
      {
        id: "2",
        name: "About Us",
        link: "/about-us",
      },
      {
        id: "3",
        name: "Services",
        link: "/services",
      },
      {
        id: "4",
        name: "Join the Team",
        link: "/join-the-team",
      },
      {
        id: "5",
        name: "Contact",
        link: "/contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center py-6 bg-[#171717] w-full">
      <div className="flex justify-between items-center flex-row mb-8 w-full">
        <div className="flex flex-col justify-start mr-10 sm:w-1/2">
          <div className="flex items-center md:mx-10 sm:ml-5 ml-3">
            <Logo />
            <p className="text-white text-[20px] font-bold leading-[27px] ml-2">
              CodeJoy Creations
            </p>
          </div>
          <p className="font-normal text-[18px] leading-[25px] mt-4 text-[#626262] md:mx-10 xs:flex hidden sm:ml-5">
            We empower your digital dreams with a joyful touch of innovation.
          </p>
        </div>

        <div className="md:mx-10 sm:mr-5">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.links.id} className="mt-10">
              <h4 className="font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4 md:flex">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-[16px] leading-[24px] text-[#757575] hover:text-white cursor-pointer mx- ${
                      index !== footerLink.links.length - 1
                        ? "sm:mb-3 mr-4"
                        : "mr-0 sm:mb-0"
                    }`}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#626262]">
        <p
          className="font-poppins font-normal text-center sm:text-[18px] text-[16px] text-[#626262] leading-[27px] mb-2
  "
        >
          &copy; Copyright CodeJoy Creations 2023 - All rights are reserved.
        </p>
        <p className="font-poppins font-normal text-center sm:text-[18px] text-[16px] text-[#626262] leading-[27px]">
          Created by Alicia Pak.
        </p>
      </div>
    </section>
  );
};

export default Footer;
