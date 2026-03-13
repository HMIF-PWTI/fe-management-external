import MemberCard from "@/components/MemberCard";
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
      </div>
    </div>
  );
};

export default IntiSection;
