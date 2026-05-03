import { useState } from "react";
import gerigi from "@/assets/gerigi.png";
import logoDhinakara from "@/assets/Logo/LogoDhinakara.png";
import logoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { KabinetKey } from "../index";

interface HeroProps {
selectedKabinet: KabinetKey;
setSelectedKabinet: (val: KabinetKey) => void;
}

const kabinetConfig: Record< KabinetKey, { title: string; tagline: string; logo: string; label: string }> = {
  "Kabinet Dhinakara": {
  title: "KABINET DHINAKARA",
  label: "Kabinet Dhinakara 25-26",
  tagline: "Satu Misi, Satu Aksi, Satu Tujuan",
  logo: logoDhinakara,
  },
  "Kabinet Dakshawira": {
  title: "KABINET DAKSHAWIRA",
  label: "Kabinet Dakshawira 24-25",
  tagline: "Kerja Keras, Kerja Cerdas, Kerja Ikhlas",
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

    <div className="relative w-full flex flex-col items-center justify-center space-y-8">
      <img src={current.logo} className="w-48 lg:w-64 z-10" alt="Logo" />

      <div className="relative w-80">
        <button onClick={()=> setOpenDropdown(!openDropdown)}
          className="w-full bg-gray-200 px-4 py-3 rounded-md flex justify-between items-center shadow-sm
          hover:bg-gray-300 transition"
          >
          <span className="truncate">
            {kabinetConfig[selectedKabinet].label}
          </span>
          <span className={`ml-2 shrink-0 transition-transform duration-300 ${ openDropdown ? "rotate-180" : "" }`}>
            ▼
          </span>
        </button>

        {/* Animated Dropdown */}
        <div className={`absolute w-full bg-white mt-1 rounded-md shadow-xl border overflow-hidden transition-all
          duration-300 ease-in-out ${ openDropdown ? "max-h-60 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2 pointer-events-none" }`}>
          {kabinetList.map((k) => (
          <button key={k} onClick={()=> {
            setSelectedKabinet(k);
            setOpenDropdown(false);
            }}
            className={`w-full text-left px-4 py-3 transition
            hover:bg-blue-500 hover:text-white
            ${
            selectedKabinet === k
            ? "bg-gray-100 font-bold"
            : ""
            }`}
            >
            {kabinetConfig[k].label}
          </button>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
  };

  export default HeroSection;