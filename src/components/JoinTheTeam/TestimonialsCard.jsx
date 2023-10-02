import quotes from "../../assets/icons/quote.svg";

const TestimonialsCard = ({ content, name, role, image }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-transparent border border-white/30 hover:bg-[#3bace2] mx-4 my-4">
      <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
        <img
          src={quotes}
          alt="double_quotes"
          className="w-[42px] h-[27px] object-contain"
        />
      </div>
      <p className="font-poppins font-normal xs:text-[18px] text-[16px] leading-[32px] my-10 text-white">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src={image}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold xs:text-[20px] text-[18px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal xs:text-[16px] text-[14px] leading-[24px] text-white">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
