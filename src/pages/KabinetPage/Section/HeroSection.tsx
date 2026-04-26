import { useState } from "react";
import gerigi from "@/assets/gerigi.png";
import logoDhinakara from "@/assets/Logo/LogoDhinakara.png";
import logoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { KabinetKey } from "../index"; 

interface HeroProps {
  selectedKabinet: KabinetKey;
  setSelectedKabinet: (val: KabinetKey) => void;
}

const kabinetConfig = {
  "Kabinet Dhinakara": {
    title: "KABINET DHINAKARA",
    tagline: "Satu Misi, Satu Aksi, Satu Tujuan",
    logo: logoDhinakara,
  },
  "Kabinet Dakshawira": {
    title: "KABINET DAKSHAWIRA",
    tagline: "KerjaKeras, KerjaCerdas, KerjaIkhlas",
    logo: logoDakshawira,
  },
};

const HeroSection = ({ selectedKabinet, setSelectedKabinet }: HeroProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const kabinetList = Object.keys(kabinetConfig) as KabinetKey[];
  const current = kabinetConfig[selectedKabinet];

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold">{current.title}</h1>
        <h2 className="text-gray-500 italic">{current.tagline}</h2>
      </div>
<<<<<<< HEAD
      <div className="relative bg-white px-6 sm:px-12 lg:px-36 py-10 min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-0 top-0 h-96 w-auto object-cover"
        />
        <div className="grid grid-cols-1 items-center gap-12 w-full">
          <div className="flex items-center justify-center relative">
            <img src={logo} className="w-2/3 lg:w-1/3 z-10" alt="Logo HMIF" />
          </div>
=======

      <div className="relative w-full flex flex-col items-center justify-center space-y-8">
        <img src={current.logo} className="w-48 lg:w-64 z-10" alt="Logo" />
        
        <div className="relative w-64 z-20">
          <button 
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full bg-gray-200 px-4 py-3 rounded-md flex justify-between items-center shadow-sm"
          >
            {selectedKabinet}
            <span>▼</span>
          </button>

          {openDropdown && (
            <div className="absolute w-full bg-white mt-1 rounded-md shadow-xl border overflow-hidden">
              {kabinetList.map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    setSelectedKabinet(k);
                    setOpenDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-blue-500 hover:text-white ${selectedKabinet === k ? 'bg-gray-100 font-bold' : ''}`}
                >
                  {k}
                </button>
              ))}
            </div>
          )}
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
        </div>
      </div>
    </div>
  );
};

export default HeroSection;