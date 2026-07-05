import { IfPedia } from "@/utils/interface";

interface PdfInfoProps {
  ifPedia: IfPedia;
}

const PdfInfo = ({ ifPedia }: PdfInfoProps) => {
  return (
    <div className="mx-auto mb-6 max-w-[680px] rounded-2xl bg-white p-5 shadow-lg">
      <h1 className="text-xl font-bold text-primary2">{ifPedia.judul}</h1>

      {ifPedia.deskripsi && (
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {ifPedia.deskripsi}
        </p>
      )}
    </div>
  );
};

export default PdfInfo;