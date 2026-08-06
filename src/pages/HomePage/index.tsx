import { Helmet } from "react-helmet-async";
import { useRef } from "react";

import HeroSection from "./Section/HeroSection";
import VideoProfilePages from "./Section/VideoProfilePages";
import VisionMissionPages from "./Section/VisionMissionPages";

const HomePage = () => {
  const visionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>HMIF UNIKOM</title>

        <meta
          name="title"
          content="HMIF UNIKOM"
        />

       <meta
  name="description"
  content="HMIF UNIKOM merupakan organisasi intra kampus yang bertujuan membentuk insan akademis, kreatif, berintegritas, dan berdaya saing dalam bidang teknologi informasi."
/>

        <meta
          name="keywords"
          content="HMIF, UNIKOM, Teknik Informatika, HMIF UNIKOM"
        />

        <meta
          property="og:title"
          content="HMIF UNIKOM"
        />

       <meta
        property="og:description"
        content="HMIF UNIKOM merupakan organisasi intra kampus yang bertujuan membentuk insan akademis, kreatif, berintegritas, dan berdaya saing dalam bidang teknologi informasi."
      />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="overflow-hidden bg-white">
        <HeroSection
          scrollToVision={() =>
            visionRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        />

        <VideoProfilePages />

        <div className="mt-10 lg:mt-24">
          <VisionMissionPages ref={visionRef} />
        </div>
      </main>
    </>
  );
};

export default HomePage;