const Disclaimer = () => {
  return (
    <>
      <div className="bg-backgroundApp w-full flex flex-col justify-center items-center h-fit py-20">
        <h2 className="text-white uppercase md:text-6xl sm:text-5xl ss:text-4xl xs:text-3xl text-2xl font-semibold mt-10">
          Disclaimer
        </h2>
        <p className="font-light md:text-xl ss:text-lg text-base mt-4 text-grayText text-center w-11/12">
          This page contains important information regarding the use of this
          website. All the content is entirely fictional and exists solely for
          creative purposes.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="md:w-3/4 w-11/12">
          <h3 className="font-semibold xs:text-[24px] text-[20px] mb-6 text-center">
            Disclaimer: All Information is Fictional
          </h3>
          <p className="font-normal ss:text-[18px] text-justify my-3 ">
            The content provided on this website, including but not limited to
            text, images, and contact details, is entirely fictional and created
            for illustrative and creative purposes. Any resemblance to actual
            people, companies, or events is purely coincidental. CodeJoy
            Creations is a fictional software company, and the information
            presented on this website is part of a creative storytelling
            exercise. It does not represent the activities, products, or
            services of any real-world organization. Please note that any
            references to names, addresses, phone numbers, or other contact
            information are entirely fictitious and should not be used for any
            real-world communication or verification purposes. <br /> Thank you
            for visiting CodeJoy Creations and for your understanding of all the
            above mentioned information.
          </p>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
