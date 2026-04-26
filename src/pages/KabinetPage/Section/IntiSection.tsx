import MemberCard from "@/components/MemberCard";
<<<<<<< HEAD
import { getAnggota } from "@/service";
import { intiData } from "@/utils/DummyData";
import { Anggota } from "@/utils/interface";
import { useEffect, useState } from "react";

const IntiSection = () => {
  const [data, setData] = useState<Anggota[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await getAnggota();
      // console.log(response.data.payload);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-12 lg:px-36 space-y-10">
      <h1 className="text-primary2 text-xl lg:text-2xl font-bold">4 INTI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {intiData.map((data, index) => (
          <div key={index} className="h-full flex justify-center">
            <MemberCard {...data} />
          </div>
        ))}
=======
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
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default IntiSection;
=======
export default IntiSection;
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
