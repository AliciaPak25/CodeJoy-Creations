import videoServices from "../../assets/videos/video (2160p) (1).mp4";

const HeroServices = () => {
  return (
    <div className="h-screen w-full">
      <video
        src={videoServices}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default HeroServices;
