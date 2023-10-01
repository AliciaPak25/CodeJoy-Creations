const reasons = [
  {
    id: "1",
    title: "A Culture of Innovation",
    description:
      "We thrive on innovation. At CodeJoy Creations, we foster a culture of creativity and exploration. We believe in pushing the boundaries of technology and encouraging our team members to think outside the box. Your ideas are not only welcomed but celebrated, and you'll have the opportunity to work on cutting-edge projects that challenge your skills and expand your horizons.",
  },
  {
    id: "2",
    title: "Collaborative Environment",
    description:
      "Teamwork is at the heart of what we do. We believe that the best solutions come from diverse minds working together. At CodeJoy Creations, you'll collaborate with talented professionals from various backgrounds, creating an environment where you can learn, grow, and be inspired daily.",
  },
  {
    id: "3",
    title: "Professional Development",
    description:
      "We're committed to your growth. We provide ongoing opportunities for skill development and advancement. Whether you're just starting your career or have years of experience, you'll find a supportive environment that encourages you to take your skills to the next level.",
  },
  {
    id: "4",
    title: "Joyful and Engaging Atmosphere",
    description:
      "We believe in infusing joy into our journey. From team-building activities to hackathons, we cultivate a joyful and enjoyable work environment that sparks creativity and nurtures strong connections among team members.",
  },
];

const WhyJoinUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 join-us-background mix-blend-lighten mb-12 mn-0">
            <h2 className="h2 text-secondary mb-6">
              Why Join CodeJoy Creations
            </h2>
            <p className="max-w-[455px] mb-16">
              At CodeJoy Creations, we believe that great teams are built on
              shared values, a passion for innovation, and a commitment to
              excellence. When you join our team, you&apos;re not just becoming
              an employee, you&apos;re becoming a part of a vibrant community of
              digital dreamers.
            </p>
          </div>

          <div className="flex-1">
            <div>
              {reasons.map((reason) => (
                <div
                  className="border-b border-black/20 h-[146px] mb-[38px] flex"
                  key={reason.id}
                >
                  <div className="flex flex-col flex-1 item-start">
                    <div className="bg-secondary w-9 h-9 mb-[42px] flex justify-center items-center" />
                  </div>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] font-poppins font-semibold mb-6">
                      {reason.title}
                    </h4>
                    <p className="font-poppins leading-tight">
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
