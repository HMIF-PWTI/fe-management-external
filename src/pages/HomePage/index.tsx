import { useRef } from "react";
import HeroSection from "./Section/HeroSection";
import VideoProfilePages from "./Section/VideoProfilePages";
import VisionMissionPages from "./Section/VisionMissionPages";

const HomePage = () => {
  const visionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-10">
      <div>
        <HeroSection
          scrollToVision={() =>
            visionRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="animate-slide-in">
        <VideoProfilePages />
      </div>
      <div className="mt-24">
        <VisionMissionPages ref={visionRef} />
      </div>
    </div>
  );
};

export default HomePage;
