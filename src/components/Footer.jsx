import React from "react";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Home",
        link: "http://localhost:5173/",
      },
      {
        name: "About Us",
        link: "http://localhost:5173/about-us",
      },
      {
        name: "Services",
        link: "http://localhost:5173/services",
      },
      {
        name: "Join the Team",
        link: "http://localhost:5173/join-the-team",
      },
      {
        name: "Contact",
        link: "http://localhost:5173/contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center py-6 bg-[#171717] w-full">
      <div className="flex justify-between items-center flex-row mb-8 w-full">
        <div className="flex flex-col justify-start mr-10 sm:w-1/2">
          <div className="flex items-center mx-10">
            <Logo />
            <p className="text-white text-[20px] font-arial font-bold leading-[27px] ml-2">
              CodeJoy Creations
            </p>
          </div>
          <p className="font-arial font-normal text-[18px] leading-[18px] mt-4 text-[#626262] mx-10">
            We empower your digital dreams with a joyful touch of innovation.
          </p>
        </div>

        <div className="mx-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="mt-10">
              <h4 className="font-arial font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4 md:flex">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-arial font-normal text-[16px] leading-[24px] text-[#757575] hover:text-secondary cursor-pointer mx- ${
                      index !== footerLink.links.length - 1
                        ? "sm:mb-3 mr-4"
                        : "mr-0 sm:mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#626262]">
        <p
          className="font-arial font-normal text-center text-[18px] text-[#626262] leading-[27px] mb-2
  "
        >
          &copy; Copyright CodeJoy Creations 2023 - All rights are reserved.
        </p>
        <p className="font-arial font-normal text-center text-[18px] text-[#626262] leading-[27px]">
          Created by Alicia Pak.
        </p>
      </div>
    </section>
  );
};

export default Footer;
