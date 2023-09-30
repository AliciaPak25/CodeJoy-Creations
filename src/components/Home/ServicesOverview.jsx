import React from "react";
import team from "../../assets/images/team-6.jpg";
import teamTwo from "../../assets/images/team.jpg";
import arrow from "../../assets/icons/arrow-narrow-right.svg";
import CustomButton from "../CustomButton";

const ServicesOverview = () => {
  return (
    <section>
      <section className="flex md:flex-row flex-col-reverse /* sm:py-16 py-6 */">
        <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
          <img src={team} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

        <div className="flex-1 flex justify-center items-start flex-col">
          <h2 className="font-arial font-semibold xs:text-[38px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Crafting Exceptional Apps
          </h2>
          <p className="font-arial font-normal text-[18px] leading-[20.8px] max-w-[470px] mt-5 text-justify">
            At CodeJoy Creations, our approach to designing and developing apps
            is rooted in creativity, precision, and innovation. We take pride in
            turning your ideas into exceptional digital solutions that not only
            meet but exceed your expectations.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <CustomButton
              styles="py-4 px-6 bg-blue-gradient font-arial font-medium text-[18px] text-white outline-none mt-10 rounded-[10px]"
              text="Learn More"
              /* img={arrow}
              alt="arrow"
              imgStyles="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" */
              /* Go to services */
            />
          </div>
        </div>
      </section>

      <section className="flex md:flex-row flex-col sm:pt-16 md:py-6">
        <div className="flex-1 flex justify-center items-start flex-col">
          <h2 className="font-arial font-semibold xs:text-[38px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Experience the Joy of Code
          </h2>
          <p className="font-arial font-normal text-[18px] leading-[20.8px] max-w-[470px] mt-5">
            Our passion for coding runs deep, and we want you to experience the
            joy too. Discover the thrill of creating digital wonders as we build
            a future where technology knows no bounds. Let&apos;s embark on a
            journey of innovation, transformation, and digital excellence
            together.
          </p>
          <CustomButton
            styles="py-4 px-6 bg-blue-gradient font-arial font-medium text-[18px] text-white outline-none mt-10 rounded-[10px]"
            text="Get in Touch"
          />{" "}
          {/* Go to contact */}
        </div>

        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
          <img src={teamTwo} alt="team2" className="w-[100%] h-[100%]" />
        </div>
      </section>
    </section>
  );
};

export default ServicesOverview;
