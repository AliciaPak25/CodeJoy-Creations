import React from "react";

const companies = [
  { id: "1", name: "TechLink Innovations" },
  { id: "2", name: "Media Minds" },
  { id: "3", name: "Global Gazette" },
  { id: "4", name: "The Insight Times" },
  { id: "5", name: "Financial Frontier" },
];

const FeaturedCompanies = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-[#171717]">
      <h3 className="uppercase mt-1 mb-1 text-[#5a5a5a]">Featured in</h3>
      <div className="flex justify-center items-center flex-row flex-wrap m-3 sm:mb-20 mb-6">
        {companies.map((company) => (
          <h4
            key={company.id}
            className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 "
          >
            {company.name}
          </h4>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
