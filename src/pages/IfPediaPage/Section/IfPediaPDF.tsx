import Loading from '@/components/Loading';
import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

const IfPediaPDF = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);

  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    if (pdfContainerRef.current) {
      observer.observe(pdfContainerRef.current);
    }

    return () => {
      if (pdfContainerRef.current) {
        observer.unobserve(pdfContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch('/IFPEDIA.pdf');
        if (!response.ok) {
          throw new Error(`Gagal fetch PDF, status: ${response.status}`);
        }
        const buffer = await response.arrayBuffer();
        setPdfData(buffer);
      } catch (error) {
        console.error("Gagal memuat PDF:", error);
      }
    };
    fetchPdf();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error: Error): void {
    console.error("Gagal memuat dokumen PDF:", error.message);
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages || 1));

  return (
    <div className="flex flex-col items-center p-2 sm:p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-center p-2 mb-4 bg-white rounded-md shadow-sm gap-4">
        <button onClick={goToPrevPage} disabled={pageNumber <= 1} className="px-4 py-2 font-bold text-white bg-blue-500 rounded disabled:bg-gray-400 hover:bg-blue-700">
          ‹ Prev
        </button>
        <span>Halaman {pageNumber} dari {numPages || '--'}</span>
        <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 0)} className="px-4 py-2 font-bold text-white bg-blue-500 rounded disabled:bg-gray-400 hover:bg-blue-700">
          Next ›
        </button>
      </div>
      <div 
        ref={pdfContainerRef} 
        className="pdf-container w-full max-w-5xl max-h-[75vh] overflow-auto border border-gray-300 min-h-[100px]"
      >
        {pdfData && containerWidth > 0 && (
          <Document
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth}
              renderAnnotationLayer={false}
              loading={<Loading />}
            />
          </Document>
        )}
      </div>
    </div>
  );
};

export default IfPediaPDF;