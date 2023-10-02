const reasons = [
  {
    id: "1",
    title: "A Culture of Innovation",
    description:
      "We foster a culture of creativity and exploration. Also, we encourage our team members to think outside the box.",
  },
  {
    id: "2",
    title: "Collaborative Environment",
    description:
      "Teamwork is at the heart of what we do. We believe that the best solutions come from diverse minds working together.",
  },
  {
    id: "3",
    title: "Professional Development",
    description:
      "We're committed to your growth. We provide ongoing opportunities for skill development and advancement.",
  },
  {
    id: "4",
    title: "Joyful and Engaging Atmosphere",
    description:
      "We cultivate a joyful and enjoyable work environment that nurtures strong connections among team members.",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 join-us-background mix-blend-lighten mb-12 mn-0 h-screen md:mr-4">
            <div className="text-center flex items-center flex-col justify-center flex-wrap bg-backgroundApp/80 h-screen w-full">
              <h2 className="h2 text-gradient md:text-3xl text-xl mb-6">
                Why Join CodeJoy Creations
              </h2>
              <p className="xs:max-w-[455px] w-11/12 mb-16 text-white sm:text-base text-sm">
                At CodeJoy Creations, we believe that great teams are built on
                shared values, a passion for innovation, and a commitment to
                excellence. When you join our team, you&apos;re not just
                becoming an employee, you&apos;re becoming a part of a vibrant
                community of digital dreamers.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-11/12">
              {reasons.map((reason) => (
                <div
                  className="border-b border-black/20 xs:h-28 h-44 mb-[38px] flex xs:w-fit w-11/12"
                  key={reason.id}
                >
                  <div className="flex flex-col flex-1 justify-center items-center mr-5">
                    <div className="bg-btn-gradient-2 xs:w-10 xs:h-10 mb-[42px] xs:flex justify-center items-center rounded-full hidden" />
                  </div>
                  <div className="xs:max-w-[476px] w-11/12">
                    <h4 className="xs:text-[20px] text-[18px] font-semibold mb-2">
                      {reason.title}
                    </h4>
                    <p className="xs:text-base text-sm leading-tight">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
