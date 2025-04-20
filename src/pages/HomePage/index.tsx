import HeroSection from "./Section/HeroSection";
import VideoProfilePages from "./Section/VideoProfilePages";
import VisionMissionPages from "./Section/VisionMissionPages";
const HomePage = () => {
  return (
    <div className="py-10 space-y-16 animate-slide-in">
      <HeroSection />
      <VideoProfilePages />
      <VisionMissionPages />
    </div>
  );
};

export default HomePage;
