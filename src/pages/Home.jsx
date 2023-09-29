import FeaturedCompanies from "../components/Home/FeaturedCompanies";
import Hero from "../components/Home/Hero";
import InnovativeSolutions from "../components/Home/InnovativeSolutions";
import ServicesOverview from "../components/Home/ServicesOverview";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCompanies />
      <InnovativeSolutions />
      <ServicesOverview />
    </>
  );
};

export default Home;
