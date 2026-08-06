import { Helmet } from "react-helmet-async";

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
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About | HMIF UNIKOM</title>

        <meta
          name="description"
          content="Halaman About HMIF UNIKOM menampilkan visi, misi, dan struktur kepengurusan Kabinet Dhinakara mulai dari inti hingga seluruh divisi."
        />

        <meta
          name="keywords"
          content="About HMIF, HMIF UNIKOM, Kabinet Dhinakara, Pengurus HMIF, Struktur HMIF"
        />

        <meta property="og:title" content="About | HMIF UNIKOM" />

        <meta
          property="og:description"
          content="Lihat visi, misi, dan struktur kepengurusan Kabinet Dhinakara HMIF UNIKOM."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className="py-10 space-y-20 overflow-hidden">
        <HeroSection />
        <IntiSection />
        <PwtiSection />
        <KesmaSection />
        <KesraSection />
        <SosmaSection />
        <PaoSection />
        <KwuSection />
        <KominfoSection />
      </main>
    </>
  );
};

export default AboutPage;