import Loading from "@/components/Loading";
import { getIfPedia } from "@/service/IfPedia";
import { IfPedia } from "@/utils/interface";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const IfPediaPDF = () => {
  const [ifPedia, setIfPedia] = useState<IfPedia | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageInput, setPageInput] = useState<string>("1");
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const pdfWrapperRef = useRef<HTMLDivElement>(null);

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
        console.error("Gagal mengambil data IF-Pedia:", error);
        setIfPedia(null);
      } finally {
        setLoadingData(false);
      }
    };

    fetchIfPedia();
  }, []);

  useEffect(() => {
const filePdfUrl = ifPedia?.file_pdf;

if (!filePdfUrl) return;

const loadPdfAsBlob = async () => {
  try {
    setLoadingPdf(true);
    setPdfError(null);

    const response = await fetch(filePdfUrl);
        if (!response.ok) {
          throw new Error("File PDF tidak bisa diakses.");
        }

        const blob = await response.blob();

        if (blob.type !== "application/pdf") {
          console.warn("Tipe file bukan application/pdf:", blob.type);
        }

        const objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } catch (error) {
        console.error("Gagal memuat file PDF:", error);
        setPdfError("PDF gagal dimuat. Cek URL file PDF atau CORS Laravel.");
      } finally {
        setLoadingPdf(false);
      }
    };

    loadPdfAsBlob();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [ifPedia]);

  useEffect(() => {
    if (!pdfWrapperRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width || 0;
      setContainerWidth(width);
    });

    observer.observe(pdfWrapperRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPageInput(String(pageNumber));
  }, [pageNumber]);

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPage = () => {
    const targetPage = Number(pageInput);

    if (!targetPage || targetPage < 1 || targetPage > numPages) {
      setPageInput(String(pageNumber));
      return;
    }

    setPageNumber(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loadingData) {
    return (
      <section className="min-h-screen bg-slate-100 px-4 py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-200 border-t-primary2" />

          <p className="text-sm font-medium text-gray-500">
            Memuat IF-Pedia...
          </p>
        </div>
      </section>
    );
  }

  if (!ifPedia || !ifPedia.file_pdf) {
    return (
      <section className="min-h-screen bg-slate-100 px-4 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-lg">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-ping rounded-full bg-cyan-200 opacity-40" />

            <div className="relative flex h-24 w-24 animate-bounce items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 shadow-sm">
              <span className="text-4xl">📘</span>
            </div>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-primary2">
            IF-Pedia Belum Tersedia
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            Saat ini file IF-Pedia belum tersedia atau belum diaktifkan oleh
            admin. Silakan cek kembali nanti.
          </p>

          <div className="mt-8 flex gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 delay-150" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 delay-300" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto mb-6 max-w-[680px] rounded-2xl bg-white p-5 shadow-lg">
        <h1 className="text-xl font-bold text-primary2">
          {ifPedia.judul}
        </h1>

        {ifPedia.deskripsi && (
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {ifPedia.deskripsi}
          </p>
        )}
      </div>

      <div className="sticky top-20 z-20 mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1 || numPages === 0}
          className="rounded-md bg-primary2 px-4 py-2 text-sm font-bold text-white disabled:bg-gray-400"
        >
          ‹ Prev
        </button>

        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <span>Halaman</span>

          <input
            type="number"
            min={1}
            max={numPages || 1}
            value={pageInput}
            disabled={numPages === 0}
            onChange={(e) => setPageInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToPage();
            }}
            className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center outline-none focus:border-primary2 disabled:bg-gray-100"
          />

          <span>dari {numPages || "--"}</span>

          <button
            onClick={goToPage}
            disabled={numPages === 0}
            className="rounded-md bg-primary2 px-3 py-1 text-xs font-bold text-white disabled:bg-gray-400"
          >
            Cari
          </button>
        </div>

        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages || numPages === 0}
          className="rounded-md bg-primary2 px-4 py-2 text-sm font-bold text-white disabled:bg-gray-400"
        >
          Next ›
        </button>
      </div>

      <div ref={pdfWrapperRef} className="mx-auto flex w-full justify-center">
        <div className="relative min-h-[500px] min-w-[320px] bg-white shadow-2xl">
          <div className="absolute -right-3 top-3 h-full w-3 rounded-r-md bg-gray-300 shadow-inner" />
          <div className="absolute -bottom-3 left-3 h-3 w-full rounded-b-md bg-gray-300 shadow-inner" />

          {loadingPdf && (
            <div className="flex min-h-[500px] w-[320px] items-center justify-center sm:w-[680px]">
              <Loading />
            </div>
          )}

          {pdfError && (
            <div className="flex min-h-[500px] w-[320px] flex-col items-center justify-center px-6 text-center sm:w-[680px]">
              <p className="mb-3 text-lg font-bold text-red-500">
                PDF gagal tampil
              </p>
              <p className="text-sm text-gray-500">{pdfError}</p>
            </div>
          )}

          {!loadingPdf && !pdfError && pdfUrl && containerWidth > 0 && (
            <Document
              file={pdfUrl}
              loading={<Loading />}
              onLoadSuccess={({ numPages }) => {
                console.log("PDF berhasil dimuat:", numPages);
                setNumPages(numPages);
                setPageNumber(1);
              }}
              onLoadError={(error) => {
                console.error("Gagal render PDF:", error);
                setPdfError("PDF gagal dirender oleh react-pdf.");
              }}
            >
              <Page
                pageNumber={pageNumber}
                width={Math.min(containerWidth * 0.9, 680)}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                loading={<Loading />}
              />
            </Document>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[680px] items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
        <div>
          <h3 className="text-sm font-bold text-primary2">
            {ifPedia.judul}
          </h3>

          <p className="text-xs text-gray-500">
            Buku Panduan Teknik Informatika
          </p>
        </div>

        <a
          href={ifPedia.file_pdf}
          download
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-primary2 bg-primary2 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-primary2"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default IfPediaPDF;