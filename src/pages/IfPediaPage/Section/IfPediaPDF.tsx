import Loading from "@/components/Loading";
import PdfViewer from "@/components/IfPedia/PdfViewer";
import IfPediaBookEmpty from "@/components/IfPedia/IfPediaBookEmpty";
import { getIfPedia } from "@/service/IfPedia";
import { IfPedia } from "@/utils/interface";
import { useEffect, useState } from "react";

const IfPediaPDF = () => {
  const [ifPedia, setIfPedia] = useState<IfPedia | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchIfPedia = async () => {
      try {
        const response = await getIfPedia();

        if (response.data.success && response.data.payload) {
          setIfPedia(response.data.payload);
        } else {
          setIfPedia(null);
        }
      } catch (error) {
        console.error("Gagal mengambil IF-Pedia:", error);
        setIfPedia(null);
      } finally {
        setLoadingData(false);
      }
    };

    fetchIfPedia();
  }, []);

  if (loadingData) {
    return (
      <section className="min-h-screen bg-slate-100 px-4 py-20">
        <div className="flex justify-center">
          <Loading />
        </div>
      </section>
    );
  }

  if (!ifPedia?.file_pdf) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center overflow-hidden bg-slate-100 px-4 py-16">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
          <IfPediaBookEmpty
            title="IF-Pedia Belum Tersedia"
            subtitle="Buku panduan IF-PEDIA saat ini belum tersedia."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8">
      <PdfViewer ifPedia={ifPedia} />
    </section>
  );
};

export default IfPediaPDF;