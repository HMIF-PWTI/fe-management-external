import Loading from "@/components/Loading";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const IfPediaPDF = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageInput, setPageInput] = useState<string>("1");
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const pdfWrapperRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="sticky top-20 z-20 mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="rounded-md bg-primary2 px-4 py-2 text-sm font-bold text-white disabled:bg-gray-400"
        >
          ‹ Prev
        </button>

        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <span>Halaman</span>

          <input
            type="number"
            min={1}
            max={numPages}
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToPage();
            }}
            className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center outline-none focus:border-primary2"
          />

          <span>dari {numPages || "--"}</span>

          <button
            onClick={goToPage}
            className="rounded-md bg-primary2 px-3 py-1 text-xs font-bold text-white"
          >
            Cari
          </button>
        </div>

        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="rounded-md bg-primary2 px-4 py-2 text-sm font-bold text-white disabled:bg-gray-400"
        >
          Next ›
        </button>
      </div>

      <div ref={pdfWrapperRef} className="mx-auto flex w-full justify-center">
        <div className="relative bg-white shadow-2xl">
          <div className="absolute -right-3 top-3 h-full w-3 rounded-r-md bg-gray-300 shadow-inner" />
          <div className="absolute -bottom-3 left-3 h-3 w-full rounded-b-md bg-gray-300 shadow-inner" />

          {containerWidth > 0 && (
            <Document
              file="/IFPEDIA.pdf"
              loading={<Loading />}
              onLoadSuccess={({ numPages }) => {
                setNumPages(numPages);
                setPageNumber(1);
              }}
              onLoadError={(error) => {
                console.error("Gagal memuat PDF:", error);
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
          <h3 className="text-sm font-bold text-primary2">IF-PEDIA</h3>
          <p className="text-xs text-gray-500">Buku Panduan Teknik Informatika</p>
        </div>

        <a
          href="/IFPEDIA.pdf"
          download
          className="rounded-xl bg-primary2 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-primary2 border border-primary2"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default IfPediaPDF;