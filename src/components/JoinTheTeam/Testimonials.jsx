import TestimonialsCard from "./TestimonialsCard";
import emily from "../../assets/images/emily.jpg";
import mark from "../../assets/images/mark.jpg";
import john from "../../assets/images/john.jpg";

const testimonials = [
  {
    id: "1",
    content:
      "CodeJoy Creations is more than a workplace, it's a family. The collaborative spirit and support from colleagues make it a truly exceptional place to work. Every challenge is an opportunity, and that's what sets this company apart",
    name: "Emily Parker",
    role: "Lead Developer",
    image: emily,
  },
  {
    id: "2",
    content:
      "Since the beginning of CodeJoy Creations, it's been an incredible ride. The creative freedom and the opportunity to tackle exciting challenges keep me motivated. I can't imagine a better place to build a career in tech.",
    name: "Mark Turner",
    role: "UI/UX Designer",
    image: mark,
  },
  {
    id: "3",
    content:
      "At CodeJoy Creations, I can really be myself. It's a community of like-minded individuals who share my enthusiasm for technology. The culture of learning and growth is exceptional, and I'm proud to be a part of this team.",
    name: "John Mitchell",
    role: "Software Engineer",
    image: john,
  },
];

const Testimonials = () => {
  return (
    <section className="sm:py-16 py-6 flex justify-center items-center flex-col relative bg-[#171717] w-full">
      <div className="absolute z-[0] w-[60&] h-[60&] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px xs:leading-[76.8px] leading-[66.8px] w-full text-white">
          What Our Team Says
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-[18px] leading-[25.8px] text-left max-w-[450px] text-white">
            At CodeJoy Creations, we&apos;re not just a software company;
            we&apos;re a community of passionate individuals who share a common
            dream — to innovate, create, and bring digital excellence to life.
            Joining us means becoming a part of something extraordinary.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {testimonials.map((card) => (
          <TestimonialsCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
