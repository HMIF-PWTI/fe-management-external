import Loading from "@/components/Loading";
import { RefObject } from "react";

interface PdfCanvasProps {
  loadingPdf: boolean;
  pdfError: string | null;
 canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

const PdfCanvas = ({ loadingPdf, pdfError, canvasRef }: PdfCanvasProps) => {
  return (
    <div className="mx-auto flex w-full justify-center">
      <div className="relative w-full max-w-[680px] overflow-hidden bg-white shadow-2xl">
        {loadingPdf && (
          <div className="flex h-[600px] w-full items-center justify-center">
            <Loading />
          </div>
        )}

        {pdfError && !loadingPdf && (
          <div className="flex h-[600px] w-full flex-col items-center justify-center px-6 text-center">
            <p className="mb-3 text-lg font-bold text-red-500">
              PDF gagal tampil
            </p>
            <p className="text-sm text-gray-500">{pdfError}</p>
          </div>
        )}

        {!loadingPdf && !pdfError && (
          <canvas ref={canvasRef} className="block w-full bg-white" />
        )}
      </div>
    </div>
  );
};

export default PdfCanvas;