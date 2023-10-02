import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="h-screen hero-background">
      <div className="text-center flex items-center flex-col justify-center flex-wrap bg-backgroundApp/80 h-screen w-full">
        <h1 className="md:text-6xl sm:text-5xl ss:text-4xl xs:text-3xl text-2xl font-semibold text-white mt-10">
          Welcome to CodeJoy Creations
        </h1>
        <p className="font-light md:text-3xl ss:text-2xl text-xl mt-5 text-white">
          Transforming Dreams into Code
        </p>
        <p className="font-light md:text-2xl ss:text-xl xs:text-lg text-base mt-4 text-white">
          Beyond code, we&apos;re a community unlocking possibilities together.
        </p>
        <CustomButton
          text="Get Started"
          styles="py-4 px-6 font-medium ss:text-[17px] text-[14px] text-white bg-transparent rounded-[80px] outline-none mt-10 border"
          action={handleClick}
        />
        {/* Create modal */}
      </div>
    </div>
  );
};

export default Hero;
