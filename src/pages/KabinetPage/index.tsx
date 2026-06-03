import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useState } from "react";

import HeroSection from "./Section/HeroSection";
import Loading from "@/components/Loading";

export type KabinetKey = "Kabinet Dakshawira" | "Kabinet Dhinakara";

const IntiSection = lazy(() => import("./Section/IntiSection"));
const PwtiSection = lazy(() => import("./Section/PwtiSection"));
const KesmaSection = lazy(() => import("./Section/KesmaSection"));
const PaoSection = lazy(() => import("./Section/PaoSection"));
const KesraSection = lazy(() => import("./Section/KesraSection"));
const SosmaSection = lazy(() => import("./Section/SosmaSection"));
const KwuSection = lazy(() => import("./Section/KwuSection"));
const KominfoSection = lazy(() => import("./Section/KominfoSection"));

const KabinetPage = () => {
  const [selectedKabinet, setSelectedKabinet] =
    useState<KabinetKey>("Kabinet Dhinakara");

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Kabinet HMIF | HMIF UNIKOM</title>

        <meta
          name="description"
          content="Halaman kabinet HMIF UNIKOM berisi struktur kepengurusan kabinet saat ini dan kabinet sebelumnya, mulai dari pengurus inti hingga setiap divisi."
        />

        <meta
          name="keywords"
          content="Kabinet HMIF, HMIF UNIKOM, Kabinet Dhinakara, Kabinet Dakshawira, Pengurus HMIF"
        />

        <meta property="og:title" content="Kabinet HMIF | HMIF UNIKOM" />
        <meta
          property="og:description"
          content="Struktur kepengurusan kabinet HMIF UNIKOM dari pengurus inti hingga setiap divisi."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="py-10 space-y-16 animate-slide-in">
        <HeroSection
          selectedKabinet={selectedKabinet}
          setSelectedKabinet={setSelectedKabinet}
        />

        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </main>
    </>
  );
};

export default KabinetPage;