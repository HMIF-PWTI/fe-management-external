import { Helmet } from "react-helmet-async";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

import HeroSection from "./Section/HeroSection";
import IntiSection from "./Section/IntiSection";
import KesmaSection from "./Section/KesmaSection";
import KesraSection from "./Section/KesraSection";
import PwtiSection from "./Section/PwtiSection";
import SosmaSection from "./Section/SosmaSection";
import PaoSection from "./Section/PaoSection";
import KwuSection from "./Section/KwuSection";
import KominfoSection from "./Section/KominfoSection";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About | HMIF UNIKOM</title>

        <meta
          name="title"
          content="About | HMIF UNIKOM"
        />

        <meta
          name="description"
          content="menampilkan struktur kepengurusan mulai dari inti hingga seluruh divisi."
        />

        <meta
          name="keywords"
          content="Kabinet HMIF, Kabinet Saat Ini, HMIF UNIKOM, Pengurus HMIF"
        />

        <meta
          property="og:title"
          content="About| HMIF UNIKOM"
        />

        <meta
          property="og:description"
          content="Lihat struktur kepengurusan kabinet saat ini HMIF UNIKOM dari inti hingga setiap divisi."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <div className="py-10 space-y-16 animate-slide-in">
        <HeroSection />
        <IntiSection />
        <PwtiSection />
        <KesmaSection />
        <KesraSection />
        <SosmaSection />
        <PaoSection />
        <KwuSection />
        <KominfoSection />
      </div>
    </>
  );
};

export default AboutPage;