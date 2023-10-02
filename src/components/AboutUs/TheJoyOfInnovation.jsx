import videoAboutUs from "../../assets/videos/video-about-us.mp4";

const TheJoyOfInnovation = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full py-10">
      <div className="md:w-1/2 ss:w-3/4 w-11/12">
        <h2 className="font-semibold xs:text-[38px] text-[30px] mb-6">
          The Joy of Innovation
        </h2>
        <p className="text-[16px] my-6 text-justify font-normal">
          We live and breathe innovation. Whether it&apos;s designing
          user-friendly interfaces, developing cutting-edge applications, or
          creating immersive digital experiences, our joy lies in the thrill of
          innovation. Each line of code is a single building block in the world
          of digital creation.
        </p>
      </div>
      <video
        src={videoAboutUs}
        autoPlay
        loop
        muted
        className="md:w-1/2 ss:w-3/4 w-11/12 object-contain"
      />
    </section>
  );
};

export default TheJoyOfInnovation;
