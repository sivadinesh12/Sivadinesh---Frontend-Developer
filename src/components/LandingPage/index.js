import HeroSection from "../HeroSection";
import FeaturesSection from "../FeaturesSection";
import AboutSection from "../AboutSection";
import TokenomicsSection from "../TokenomicsSection";
import RoadmapSection from "../RoadMapSection";
import FaqSection from "../FaqSection";
import "./index.css";
import ExploreSection from "../ExploreSection";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <div className="landing-page-bg">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FaqSection />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
