interface PdfToolbarProps {
  pageNumber: number;
  numPages: number;
  pageInput: string;
  loadingPdf: boolean;
  setPageInput: (value: string) => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage: () => void;
}

const PdfToolbar = ({
  pageNumber,
  numPages,
  pageInput,
  loadingPdf,
  setPageInput,
  goToPrevPage,
  goToNextPage,
  goToPage,
}: PdfToolbarProps) => {
  return (
    <div className="sticky top-20 z-20 mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
      <button
        onClick={goToPrevPage}
        disabled={pageNumber <= 1 || loadingPdf}
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
          disabled={loadingPdf || numPages === 0}
          onChange={(e) => setPageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") goToPage();
          }}
          className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center outline-none focus:border-primary2 disabled:bg-gray-100"
        />

        <span>dari {numPages || "--"}</span>

        <button
          onClick={goToPage}
          disabled={loadingPdf || numPages === 0}
          className="rounded-md bg-primary2 px-3 py-1 text-xs font-bold text-white disabled:bg-gray-400"
        >
          Cari
        </button>
      </div>

      <button
        onClick={goToNextPage}
        disabled={pageNumber >= numPages || loadingPdf || numPages === 0}
        className="rounded-md bg-primary2 px-4 py-2 text-sm font-bold text-white disabled:bg-gray-400"
      >
        Next ›
      </button>
    </div>
  );
};

export default PdfToolbar;