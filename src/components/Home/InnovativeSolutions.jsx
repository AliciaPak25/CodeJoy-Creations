import { Link } from "react-router-dom";
import design from "../../assets/icons/ux-circle.svg";
import web from "../../assets/icons/device-desktop.svg";
import mobile from "../../assets/icons/device-mobile-code.svg";
import ai from "../../assets/icons/robot-face.svg";
import arrow from "../../assets/icons/arrow-white.svg";

export const services = [
  {
    id: "1",
    icon: design,
    service: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces to enhance user engagement.",
  },
  {
    id: "2",
    icon: web,
    service: "Web Development",
    description:
      "Building responsive and user-friendly websites, including front-end and back-end development.",
  },
  {
    id: "3",
    icon: mobile,
    service: "Mobile App Development",
    description:
      "Crafting mobile apps for iOS and Android platforms, with a focus on user experience and functionality.",
  },
  {
    id: "4",
    icon: ai,
    service: "AI and Machine Learning",
    description:
      " Building machine learning models and AI-driven applications to automate processes.",
  },
];

const ServicesCard = ({ icon, service, description, index }) => (
  <div
    className={`flex flex-col p-6 rounded-[10px] bg-[#292251] hover:#9c70d2 md:w-5/12 md:h-72 w-full md:mx-4 my-4`}
  >
    <div className="w-[64px] h-[64px] rounded-full bg-[#665492] flex justify-center items-center">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 mt-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {service}
      </h4>
      <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px] mb-1 mt-2">
        {description}
      </p>
    </div>
  </div>
);

const InnovativeSolutions = () => {
  return (
    <section className="flex flex-row flex-wrap bg-[#171717] items-center justify-center pb-6 sm:pb-16">
      <div className="flex justify-center md:items-start items-center flex-col">
        <h2 className="text-white text-center md:text-start font-semibold xs:text-[48px] md:text-[40px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Creating <br /> Innovative
          <br /> Solutions
        </h2>
        <p className="font-normal text-white md:text-start text-center text-[18px] leading-[30.8px] xs:max-w-[470px] max-w-xs mt-5">
          Our commitment to innovation drives us to stay at the forefront of
          technology trends. We&apos;re always ready to tackle the next big
          challenge.
        </p>
        <Link
          className="mt-10 py-4 px-6 bg-transparent outline-none border rounded-[80px] flex"
          to="/services"
        >
          <p className="text-white font-medium text-[18px] mr-4">
            Our Services
          </p>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>

      <div className="flex md:flex-row flex-col flex-end justify-end items-center md:ml-10 ml-0 md:mt-0 mt-10 md:w-3/6 ss:w-4/6 w-full flex-wrap">
        {services.map((service, index) => (
          <ServicesCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default InnovativeSolutions;
