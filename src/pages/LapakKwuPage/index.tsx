import { Helmet } from "react-helmet-async";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

import HeroSection from "./Section/HeroSection";
import MarketSection from "./Section/MarketSection";

const LapakKwuPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Lapak KWU | HMIF UNIKOM</title>

        <meta
          name="title"
          content="Lapak KWU | HMIF UNIKOM"
        />

        <meta
          name="description"
          content="Lapak KWU HMIF UNIKOM menyediakan berbagai merchandise dan produk mahasiswa Teknik Informatika UNIKOM."
        />

        <meta
          name="keywords"
          content="Lapak KWU, HMIF UNIKOM, Merchandise HMIF, Teknik Informatika"
        />

        <meta
          property="og:title"
          content="Lapak KWU | HMIF UNIKOM"
        />

        <meta
          property="og:description"
          content="Lapak KWU HMIF UNIKOM menyediakan berbagai merchandise dan produk mahasiswa Teknik Informatika UNIKOM."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <HeroSection />
        <MarketSection />
      </main>
    </>
  );
};

export default LapakKwuPage;