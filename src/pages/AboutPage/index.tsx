import DivisiSection from "./Section/DivisiSection";
import HeroSection from "./Section/HeroSection";
import IntiSection from "./Section/IntiSection";

const AboutPage = () => {
  return (
    <div className="py-10 space-y-16 animate-slide-in">
      <HeroSection />
      <IntiSection />
      <DivisiSection />
    </div>
  );
};

export default AboutPage;
