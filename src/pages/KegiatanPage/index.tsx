import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

import Loading from "@/components/Loading";
import HeroSection from "./Section/HeroSection";
import ActivitySection from "./Section/ActivitySection";

const KegiatanPage = () => {
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
        <title>Kegiatan HMIF | HMIF UNIKOM</title>

        <meta
          name="title"
          content="Kegiatan HMIF | HMIF UNIKOM"
        />

        <meta
          name="description"
          content="Berbagai kegiatan dan program kerja HMIF UNIKOM "
        />

        <meta
          name="keywords"
          content="Kegiatan HMIF, Event HMIF, HMIF UNIKOM, Teknik Informatika"
        />

        <meta
          property="og:title"
          content="Kegiatan HMIF | HMIF UNIKOM"
        />

        <meta
          property="og:description"
          content="Berbagai kegiatan dan program kerja HMIF UNIKOM "
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <div className="animate-slide-in py-10 space-y-10">
        <HeroSection />
        <ActivitySection />
      </div>
    </>
  );
};

export default KegiatanPage;