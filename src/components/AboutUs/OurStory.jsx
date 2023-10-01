import React from "react";
import office from "../../assets/images/office.jpg";

const OurStory = () => {
  return (
    <section className="flex justify-center items-center w-full py-10">
      <div className="w-1/2">
        <h2 className="font-arial font-semibold xs:text-[38px] text-[30px] mb-6">
          Our Story
        </h2>
        <p className="font-arial font-normal text-[18px] text-justify my-3">
          Picture this: A small, bustling office humming with the energy of
          creative minds. That&apos;s where our story begins. With a shared
          vision and a sprinkle of coding magic, we founded CodeJoy Creations.
          It all started with a dream to make the digital world a better, more
          joyful place.
        </p>
        <p className="font-arial font-normal text-[18px] text-justify mb-3">
          We&apos;ve always been a group of friends who shared a common passion:
          coding. We were just ordinary developers for the rest of the world,
          but we also were visionaries with a dream of shaping the digital world
          into something extraordinary.
        </p>
        <p className="font-arial font-normal text-[18px]  text-justify mb-3">
          One day, we decided to found our own company. The name &quot;CodeJoy
          Creations&quot; came up to our minds. But for us, it was more than a
          company name; it was a declaration of our mission. We believed that
          coding should not be a mundane task but a joyful art form, a means to
          transform ideas into vibrant digital realities.
        </p>
        <p className="font-arial font-normal text-[18px] mb-6 text-justify">
          CodeJoy Creations soon became a hub of talent, a place where
          innovators, designers, and developers came together to create digital
          wonders.
        </p>
        <p className="font-arial text-[16px] my-6 text-justify italic">
          CodeJoy Creations - Where Innovation Meets Joy.
        </p>
        <img src={office} alt="office" />
      </div>
    </section>
  );
};

export default OurStory;
