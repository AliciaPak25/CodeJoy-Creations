import { services } from "../Home/InnovativeSolutions";

const ServiceCard = ({ index, service, description, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div className="w-full p-[1px] rounded-[20px] box-shadow">
      <div className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-[20px] font-bold text-center">{service}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <>
      <div>
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Our services
        </h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        our services
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
