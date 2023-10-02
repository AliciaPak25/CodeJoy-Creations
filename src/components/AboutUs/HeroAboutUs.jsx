import heroAbout from "../../assets/images/hero-about.jpg";
import heroAboutMobile from "../../assets/images/hero-about-us-mobile.jpg";

const HeroAboutUs = () => {
  return (
    <div className="h-screen bg-[#171717] w-full flex md:flex-row flex-col md:justify-evenly justify-center items-center">
      <div className="max-w-[570px] flex flex-col md:flex-start mt-10">
        <h2 className="text-[#fff] font-bold font-poppins ss:text-[33px] xs:text-[25px] text-[20px] md:leading-[33px] text-center ss:text-start">
          About CodeJoy Creations
        </h2>
        <p className="font-light ss:text-[18px] text-[#9f9f9f] mt-[30px] md:mr-[29px] text-center ss:text-start ss:px-0 px-1">
          At CodeJoy Creations, we&apos;re more than a software company,
          we&apos;re a passionate team of dreamers and coding artists.
        </p>
        <p className="font-light ss:text-[18px] text-[#9f9f9f] mt-[10px] md:mr-[29px] text-center ss:text-start ss:px-0 px-1">
          We believe that every line of code holds the potential to transform
          the future. Our passion lies in utilizing the power of technology to
          bring your ideas to life.
        </p>
        <p className="font-light ss:text-[18px] text-[#9f9f9f] mt-[10px] md:mr-[29px] xs:flex hidden  text-center ss:text-start ss:px-0 px-1">
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
        className="max-w-[400px] xl:max-w-[800px] xl:h-2/4 mt-10 h-3/4 rounded-[10px] md:flex hidden"
      />

      <img
        src={heroAboutMobile}
        alt="team"
        className="mt-10 rounded-[10px] xs:hidden flex xs:h-52 xs:w-80 w-96 h-60"
      />
    </div>
  );
};

export default HeroAboutUs;
