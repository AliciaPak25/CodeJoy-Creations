import { Link } from "react-scroll";
import heroJoin from "../../assets/images/hero-join-the-team.jpg";

const HeroJoinTheTeam = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-20 md:px-16 bg-[#171717] md:h-screen w-full items-center">
      <div className="flex-1 flex justify-center items-start flex-col ml-10">
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[24px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Join Our Dream Team
        </h2>
        <p className="font-poppins font-normal xs:text-[18px] leading-[25.8px] text-white xs:max-w-[470px] w-11/12 text-justify md:text-start mt-5">
          We&apos;re looking for passionate individuals to join us on our
          journey of digital excellence. If you&apos;re a coder, designer, or
          tech enthusiast who shares our joy for creating digital wonders, we
          want you on board.
        </p>
        <Link
          className="mt-10 py-4 px-6 font-poppins font-medium xs:text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none cursor-pointer"
          to="cv"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Join the Team
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10">
        <img src={heroJoin} alt="the-team" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default HeroJoinTheTeam;
