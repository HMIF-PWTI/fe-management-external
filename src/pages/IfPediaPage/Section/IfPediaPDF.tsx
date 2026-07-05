import Loading from "@/components/Loading";
import PdfViewer from "@/components/IfPedia/PdfViewer";
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
      <section className="min-h-screen bg-slate-100 px-4 py-20">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-primary2">
            IF-Pedia Belum Tersedia
          </h2>
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