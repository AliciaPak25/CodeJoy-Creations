import React from "react";
import videoAboutUs from "../../assets/videos/video (2160p).mp4";

const TheJoyOfInnovation = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full py-10">
      <div className="w-1/2">
        <h2 className="font-arial font-semibold xs:text-[38px] text-[30px] mb-6">
          The Joy of Innovation
        </h2>
        <p className="font-arial text-[16px] my-6 text-justify font-normal">
          We live and breathe innovation. Whether it&apos;s designing
          user-friendly interfaces, developing cutting-edge applications, or
          creating immersive digital experiences, our joy lies in the thrill of
          innovation. Each line of code is a brushstroke in the canvas of
          digital creativity.
        </p>
      </div>
      <video src={videoAboutUs} autoPlay loop muted className="w-1/2" />
    </section>
  );
};

export default TheJoyOfInnovation;
