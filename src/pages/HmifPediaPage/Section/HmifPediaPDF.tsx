import Loading from "@/components/Loading";
import PdfViewer from "@/components/IfPedia/PdfViewer";
import BookComingSoon from "@/components/HmifPedia/BookComingSoon";
import { getHmifPedia } from "@/service/HmifPedia";
import { HmifPedia } from "@/utils/interface";
import { useCallback, useEffect, useState } from "react";

const HmifPediaPDF = () => {
  const [hmifPedia, setHmifPedia] = useState<HmifPedia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHmifPedia = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await getHmifPedia();

      if (!response.data.success) {
        throw new Error("Respons API HMIF-PEDIA tidak valid");
      }

      setHmifPedia(response.data.data);
    } catch {
      setHmifPedia(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchHmifPedia();
  }, [fetchHmifPedia]);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-100 px-4 py-20">
        <div className="flex justify-center"><Loading /></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-100 px-4 py-20">
        <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-xl font-bold text-primary2">
            HMIF-PEDIA sedang tidak dapat dimuat.
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Silakan coba kembali beberapa saat lagi.
          </p>
          <button
            type="button"
            onClick={() => void fetchHmifPedia()}
            className="mt-6 rounded-lg bg-primary2 px-5 py-2 text-sm font-bold text-white"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    );
  }

  if (!hmifPedia?.pdf_url) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-100 px-4 pb-24 pt-12 sm:min-h-[76vh] sm:pt-16">
        <BookComingSoon />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8">
      <PdfViewer
        ifPedia={{
          ...hmifPedia,
          file_pdf: hmifPedia.pdf_url,
          is_active: true,
        }}
      />
    </section>
  );
};

export default HmifPediaPDF;
