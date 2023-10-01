import CustomButton from "../CustomButton";
import heroJoin from "../../assets/images/hero-join-the-team.jpg";

const HeroJoinTheTeam = () => {
  return (
    /*     <div className="h-screen bg-[#171717] w-full flex justify-evenly items-center">
      <div className="max-w-[570px] flex flex-col flex-start mt-10">
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Join Our Digital Dream Team
        </h2>
        <p className="font-poppins font-normal text-[18px] leading-[25.8px] text-white max-w-[470px] mt-5">
          We&apos;re looking for passionate individuals to join us on our
          journey of digital excellence. If you&apos;re a coder, designer, or
          tech enthusiast who shares our joy for creating digital wonders, we
          want you on board.
        </p>
        <CustomButton
          text="Join the Team"
          styles="mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none"
        />
      </div>

      <img
        src={heroJoin}
        alt="team"
        className="max-w-[800px] mt-10 h-3/4 rounded-[10px]"
      />
    </div> */
    <section className="flex md:flex-row flex-col sm:py-16 py-6 md:px-16 bg-[#171717] md:h-screen w-full items-center">
      <div className="flex-1 flex justify-center items-start flex-col ml-10">
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Join Our Digital Dream Team
        </h2>
        <p className="font-poppins font-normal text-[18px] leading-[25.8px] text-white max-w-[470px] mt-5">
          We&apos;re looking for passionate individuals to join us on our
          journey of digital excellence. If you&apos;re a coder, designer, or
          tech enthusiast who shares our joy for creating digital wonders, we
          want you on board.
        </p>
        <CustomButton
          text="Join the Team"
          styles="mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none"
        />
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10">
        <img src={heroJoin} alt="the-team" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default HeroJoinTheTeam;
