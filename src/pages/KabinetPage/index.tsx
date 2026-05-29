import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

import HeroSection from "./Section/HeroSection";
import IntiSection from "./Section/IntiSection";
import PwtiSection from "./Section/PwtiSection";
import KesmaSection from "./Section/KesmaSection";
import PaoSection from "./Section/PaoSection";
import KesraSection from "./Section/KesraSection";
import SosmaSection from "./Section/SosmaSection";
import KwuSection from "./Section/KwuSection";
import KominfoSection from "./Section/KominfoSection";

export type KabinetKey = "Kabinet Dakshawira" | "Kabinet Dhinakara";

const KabinetPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedKabinet, setSelectedKabinet] =
    useState<KabinetKey>("Kabinet Dhinakara");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
     <Helmet prioritizeSeoTags>
  <title>Kabinet HMIF | HMIF UNIKOM</title>

  <meta
    name="title"
    content="Kabinet HMIF | HMIF UNIKOM"
  />

  <meta
    name="description"
    content="kepengurusan kabinet sebelumnya dan kabinet saat ini, mulai dari inti hingga setiap divisi."
  />

  <meta
    name="keywords"
    content="Kabinet HMIF, HMIF UNIKOM, Kabinet Sebelumnya, Kabinet Saat Ini, Pengurus HMIF"
  />

  <meta
    property="og:title"
    content="Kabinet HMIF | HMIF UNIKOM"
  />

  <meta
    property="og:description"
    content=" kepengurusan kabinet sebelumnya dan kabinet saat ini HMIF UNIKOM."
  />

  <meta
    property="og:type"
    content="website"
  />
</Helmet>

      <div className="py-10 space-y-16 animate-slide-in">
        <HeroSection
          selectedKabinet={selectedKabinet}
          setSelectedKabinet={setSelectedKabinet}
        />

        <div className="space-y-20">
          <IntiSection selectedKabinet={selectedKabinet} />
          <PwtiSection selectedKabinet={selectedKabinet} />
          <KesmaSection selectedKabinet={selectedKabinet} />
          <KesraSection selectedKabinet={selectedKabinet} />
          <SosmaSection selectedKabinet={selectedKabinet} />
          <PaoSection selectedKabinet={selectedKabinet} />
          <KwuSection selectedKabinet={selectedKabinet} />
          <KominfoSection selectedKabinet={selectedKabinet} />
        </div>
      </div>
    </>
  );
};

export default KabinetPage;