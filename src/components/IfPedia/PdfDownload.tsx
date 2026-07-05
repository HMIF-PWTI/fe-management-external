import { IfPedia } from "@/utils/interface";

interface PdfDownloadProps {
  ifPedia: IfPedia;
}

const PdfDownload = ({ ifPedia }: PdfDownloadProps) => {
  if (!ifPedia.file_pdf) return null;

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[680px] items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
      <div>
        <h3 className="text-sm font-bold text-primary2">{ifPedia.judul}</h3>
        <p className="text-xs text-gray-500">
          Buku Panduan Teknik Informatika
        </p>
      </div>

      <a
        href={ifPedia.file_pdf}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-primary2 px-4 py-2 text-sm font-bold text-white"
      >
        Download
      </a>
    </div>
  );
};

export default PdfDownload;