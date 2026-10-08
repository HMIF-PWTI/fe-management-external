import Loading from "@/components/Loading";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import HmifPediaPDF from "./Section/HmifPediaPDF";

const HmifPediaPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>HMIF-PEDIA | HMIF UNIKOM</title>
        <meta name="title" content="HMIF-PEDIA | HMIF UNIKOM" />
        <meta
          name="description"
          content="HMIF-PEDIA merupakan buku panduan Himpunan Mahasiswa Teknik Informatika UNIKOM."
        />
        <meta
          name="keywords"
          content="HMIF-PEDIA, HMIF UNIKOM, Teknik Informatika, Buku Panduan HMIF"
        />
        <meta property="og:title" content="HMIF-PEDIA | HMIF UNIKOM" />
        <meta
          property="og:description"
          content="HMIF-PEDIA merupakan buku panduan Himpunan Mahasiswa Teknik Informatika UNIKOM."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="animate-slide-in py-3">
        <HmifPediaPDF />
      </div>
    </>
  );
};

export default HmifPediaPage;
