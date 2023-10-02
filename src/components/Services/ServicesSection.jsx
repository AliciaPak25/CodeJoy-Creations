import design from "../../assets/icons/ux-circle.svg";
import web from "../../assets/icons/device-desktop.svg";
import mobile from "../../assets/icons/device-mobile-code.svg";
import ai from "../../assets/icons/robot-face.svg";

const services = [
  {
    id: "1",
    icon: design,
    service: "UI/UX Design",
    description:
      "User experience and design are at the heart of every successful digital product. Our UI/UX design services are aimed at creating visually stunning and intuitive interfaces that captivate your audience. We believe that great design goes beyond aesthetics; it's about enhancing usability and creating meaningful interactions.",
  },
  {
    id: "2",
    icon: web,
    service: "Web Development",
    description:
      "Your online presence matters, and we're here to make it exceptional. Our web development services encompass everything from building responsive websites to creating dynamic web applications. We combine the latest technologies with user-centric design to ensure your online platform leaves a lasting impression.",
  },
  {
    id: "3",
    icon: mobile,
    service: "Mobile App Development",
    description:
      "Unlock the potential of the mobile world with our mobile development expertise. We specialize in creating user-friendly and feature-rich mobile applications for both iOS and Android platforms. Whether you're launching a new app or enhancing an existing one, we have the technical prowess and creativity to bring your vision to life.",
  },
  {
    id: "4",
    icon: ai,
    service: "AI and Machine Learning",
    description:
      "Artificial Intelligence and Machine Learning are driving forces in today's digital landscape. Our AI and machine learning services enable businesses to harness the potential of data-driven insights, automation, and predictive analytics. Whether you're looking to optimize processes or gain a competitive edge, we have the expertise to make it happen.",
  },
];

const ServiceCard = ({ index, service, description, icon }) => (
  <div className="xs:w-[250px] w-full bg-blue-gradient rounded-md mb-4">
    <div className="w-full p-[1px] rounded-[20px] box-shadow">
      <div className="rounded-[20px] py-5 min-h-[280px] flex justify-center items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="xs:text-[20px] text-[18px] font-bold text-center">
          {service}
        </h3>
        <p className="xs:px-2 w-11/12 text-justify xs:text-start xs:text-base text-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <h2 className="font-semibold xs:text-[38px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Our services
        </h2>
      </div>

      <p className="mt-4 text-buttonTexts xs:text-[17px] text-[15px] xs:max-w-3xl w-11/12 leading-[25px] text-justify xs:text-start">
        At CodeJoy Creations, we take pride in offering a diverse range of
        services designed to elevate your digital presence and drive innovation.
        Our team of skilled professionals is committed to delivering excellence
        in every project we undertake. Explore our core service offerings:
      </p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
