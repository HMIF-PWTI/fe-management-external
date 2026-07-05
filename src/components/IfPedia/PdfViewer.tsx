import { IfPedia } from "@/utils/interface";
import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import PdfToolbar from "./PdfToolbar";
import PdfCanvas from "./PdfCanvas";
import PdfDownload from "./PdfDownload";
import PdfInfo from "./PdfInfo";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfViewerProps {
  ifPedia: IfPedia;
}

const PdfViewer = ({ ifPedia }: PdfViewerProps) => {
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageInput, setPageInput] = useState("1");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const filePdfUrl = ifPedia.file_pdf;

    if (!filePdfUrl) return;

    const loadPdf = async () => {
      setLoadingPdf(true);
      setPdfError(null);

      try {
        const pdf = await pdfjsLib.getDocument({
          url: filePdfUrl,
          withCredentials: false,
        }).promise;

        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setPageNumber(1);
        setPageInput("1");
      } catch (error) {
        console.error("PDF gagal dimuat:", error);
        setPdfError("PDF gagal dimuat. Cek URL PDF atau worker PDF.js.");
      } finally {
        setLoadingPdf(false);
      }
    };

    loadPdf();
  }, [ifPedia.file_pdf]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let cancelled = false;
    let renderTask: any = null;

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(pageNumber);

        if (cancelled || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) return;

        const maxWidth = Math.min(window.innerWidth - 32, 680);
        const originalViewport = page.getViewport({ scale: 1 });
        const scale = maxWidth / originalViewport.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        canvas.style.width = "100%";
        canvas.style.height = "auto";

        context.clearRect(0, 0, canvas.width, canvas.height);

        renderTask = page.render({
          canvasContext: context,
          viewport,
        });

        await renderTask.promise;
      } catch (error: any) {
        if (error?.name === "RenderingCancelledException") return;

        console.error("PDF gagal dirender:", error);
        setPdfError("PDF gagal dirender.");
      }
    };

    renderPage();
    setPageInput(String(pageNumber));

    return () => {
      cancelled = true;

      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNumber]);

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const goToPage = () => {
    const target = Number(pageInput);

    if (!target || target < 1 || target > numPages) {
      setPageInput(String(pageNumber));
      return;
    }

    setPageNumber(target);
  };

  return (
    <>
      <PdfInfo ifPedia={ifPedia} />

      <PdfToolbar
        pageNumber={pageNumber}
        numPages={numPages}
        pageInput={pageInput}
        loadingPdf={loadingPdf}
        setPageInput={setPageInput}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
      />

      <PdfCanvas
        loadingPdf={loadingPdf}
        pdfError={pdfError}
        canvasRef={canvasRef}
      />

      <PdfDownload ifPedia={ifPedia} />
    </>
  );
};

export default PdfViewer;