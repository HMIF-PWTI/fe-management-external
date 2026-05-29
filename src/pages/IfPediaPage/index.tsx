import { Helmet } from "react-helmet-async";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";

import IfPediaPDF from "./Section/IfPediaPDF";

const IfPediaPage = () => {
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
        <title>IF-PEDIA | HMIF UNIKOM</title>

        <meta
          name="title"
          content="IF-PEDIA | HMIF UNIKOM"
        />

        <meta
          name="description"
          content="IF-PEDIA merupakan buku panduan Teknik Informatika UNIKOM yang berisi informasi akademik, organisasi, dan panduan mahasiswa Teknik Informatika."
        />

        <meta
          name="keywords"
          content="IF-PEDIA, HMIF UNIKOM, Teknik Informatika, Buku Panduan Informatika"
        />

        <meta
          property="og:title"
          content="IF-PEDIA | HMIF UNIKOM"
        />

        <meta
          property="og:description"
          content="IF-PEDIA merupakan buku panduan Teknik Informatika UNIKOM yang berisi informasi akademik, organisasi, dan panduan mahasiswa Teknik Informatika."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <div className="animate-slide-in py-3">
        <IfPediaPDF />
      </div>
    </>
  );
};

export default IfPediaPage;