import { useRef } from "react";
import HeroSection from "./Section/HeroSection";
import VideoProfilePages from "./Section/VideoProfilePages";
import VisionMissionPages from "./Section/VisionMissionPages";

const HomePage = () => {
  const visionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-10 space-y-16 animate-slide-in">
      <HeroSection
        scrollToVision={() =>
          visionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <VideoProfilePages />
      <VisionMissionPages ref={visionRef} />
    </div>
  );
};

export default HomePage;
