import MemberCard from "@/components/MemberCard";
// Import semua data yang diperlukan dari file utils
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const IntiSection = ({ selectedKabinet }: SectionProps) => {

  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;

 
  const displayData = source.intiData;

  return (
    <div className="flex flex-col items-center px-6 space-y-10 py-10">
      <h1 className="text-primary2 text-xl lg:text-2xl font-bold uppercase tracking-wider">
        PENGURUS INTI
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {displayData && displayData.length > 0 ? (
          displayData.map((person, index) => (
            <div key={index} className="h-full flex justify-center">
              <MemberCard {...person} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Data tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default IntiSection;
