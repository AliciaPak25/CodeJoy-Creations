import React from "react";

const Hero = () => {
  return (
    <div className="h-screen hero-background">
      <div className="text-center flex items-center flex-col justify-center bg-[#171717]/80 h-screen w-full">
        <h1 className="text-6xl font-semibold text-white">
          Welcome to CodeJoy Creations
        </h1>
        <p className="font-light text-3xl mt-5 text-white">
          Transforming Dreams into Code
        </p>
        <p className="font-light text-2xl mt-4 text-white">
          Beyond code, we&apos;re a community unlocking possibilities together.
        </p>
        <button className="px-5 py-2 inline-block bg-[#86d2ff] text-black hover:bg-[#e483fc] transition-colors mt-10 ">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
