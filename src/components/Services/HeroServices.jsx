import videoServices from "../../assets/videos/video (2160p) (1).mp4";
import imgServices from "../../assets/images/team-2.jpeg";

const HeroServices = () => {
  return (
    <div className="h-screen w-full">
      <video
        src={videoServices}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover md:flex hidden"
      />
      <img
        src={imgServices}
        className="w-full h-screen object-cover md:hidden flex"
      />
    </div>
  );
};

export default HeroServices;
