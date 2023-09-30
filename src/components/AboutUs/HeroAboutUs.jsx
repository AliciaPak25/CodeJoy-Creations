import React from "react";
import heroAbout from "../../assets/images/hero-about.jpg";

const HeroAboutUs = () => {
  return (
    <div className="h-screen bg-[#171717] w-full flex justify-evenly items-center">
      <div className="max-w-[570px] flex flex-col flex-start mt-10">
        <h2 className="text-[#fff] font-bold font-arial text-[33px] leading-[43px]">
          About CodeJoy Creations
        </h2>
        <p className="font-light text-[18px] text-[#9f9f9f] mt-[30px] mr-[29px]">
          At CodeJoy Creations, we&apos;re more than a software company,
          we&apos;re a passionate team of dreamers and coding artists.
        </p>
        <p className="font-light text-[18px] text-[#9f9f9f] mt-[30px] mr-[29px]">
          We believe that every line of code holds the potential to transform
          the future. Our passion lies in utilizing the power of technology to
          bring your ideas to life.
        </p>
        <p className="font-light text-[18px] text-[#9f9f9f] mt-[30px] mr-[29px]">
          We&apos;re passionate about the endless possibilities of code.
          We&apos;re a dynamic team of creators, innovators, and problem solvers
          dedicated to crafting exceptional digital experiences. Whether
          you&apos;re a visionary startup or an established enterprise,
          we&apos;re here to turn your ideas into awe-inspiring software
          solutions.
        </p>
      </div>

      <img
        src={heroAbout}
        alt="team"
        className="max-w-[400px] mt-10 h-3/4 rounded-[10px]"
      />
    </div>
  );
};

export default HeroAboutUs;
