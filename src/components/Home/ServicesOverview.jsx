import { Link } from "react-router-dom";
import team from "../../assets/images/team-6.jpg";
import teamTwo from "../../assets/images/team.jpg";
import arrow from "../../assets/icons/arrow-narrow-right.svg";

const ServicesOverview = () => {
  return (
    <section>
      <section className="flex md:flex-row flex-col-reverse /* sm:py-16 py-6 */">
        <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
          <img src={team} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

        <div className="flex-1 flex justify-center md:items-start items-center flex-col">
          <h2 className="font-semibold xs:text-[35px] text-[30px] xs:leading-[46.8px] leading-[36.8px] w-full text-center md:text-start">
            Crafting Exceptional Apps
          </h2>
          <p className="font-normal text-[18px] leading-[25.8px] max-w-[470px] mt-5 text-center md:text-start">
            At CodeJoy Creations, our approach to designing and developing apps
            is rooted in creativity, precision, and innovation. We take pride in
            turning your ideas into exceptional digital solutions that not only
            meet but exceed your expectations.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-8 mt-6">
            <Link
              className="py-4 px-6 bg-blue-gradient rounded-[80px] flex"
              to="/services"
            >
              <p className="text-[18px]  text-buttonTexts font-medium outline-none">
                Learn More
              </p>
              <img
                src={arrow}
                alt="arrow"
                className="object-contain ml-4 cursor-pointer"
              />
            </Link>
            {/* Later it can go to Our Portfolio (not created yet) */}
          </div>
        </div>
      </section>

      <section className="flex md:flex-row flex-col sm:pt-16 md:py-6 md:mb-6">
        <div className="flex-1 flex justify-center md:items-end items-center flex-col">
          <h2 className="font-semibold xs:text-[34.5px] text-[30px] xs:leading-[46.8px] leading-[36.8px] text-center md:text-start">
            Experience the Joy of Code
          </h2>
          <p className="font-poppins font-normal text-[18px] leading-[25.8px] max-w-[470px] mt-5 text-center md:text-start">
            Our passion for coding runs deep, and we want you to experience the
            joy too. Discover the thrill of creating digital wonders as we build
            a future where technology knows no bounds. Let&apos;s embark on a
            journey of innovation, transformation, and digital excellence
            together.
          </p>
          <div className="sm:w-[470px] flex md:justify-start justify-center">
            <Link
              className="py-4 px-6 bg-blue-gradient mt-8 rounded-[80px] w-52 flex"
              to="/contact"
            >
              <p className="font-medium text-[18px] text-buttonTexts outline-none ">
                Get in Touch
              </p>
              <img
                src={arrow}
                alt="arrow"
                className="object-contain ml-4 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
          <img src={teamTwo} alt="team2" className="w-[100%] h-[100%]" />
        </div>
      </section>
    </section>
  );
};

export default ServicesOverview;
