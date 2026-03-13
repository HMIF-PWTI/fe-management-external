import gerigi from "@/assets/gerigi.png";
import logoDhinakara from "@/assets/Logo/LogoDhinakara.png";
import logoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { useState } from "react";

type KabinetKey = "Kabinet Dakshawira" | "Kabinet Dhinakara";

const kabinetData: Record<
  KabinetKey,
  { title: string; tagline: string; logo: string }
> = {
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

const HeroSection: React.FC = () => {

  const [selectedKabinet, setSelectedKabinet] =
    useState<KabinetKey>("Kabinet Dakshawira");

  const [openDropdown, setOpenDropdown] = useState(false);

  const kabinetList = Object.keys(kabinetData) as KabinetKey[];

  const currentKabinet = kabinetData[selectedKabinet];

  return (
    <div>

      {/* TITLE */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-20 px-6 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {currentKabinet.title}
        </h1>

        <h2>{currentKabinet.tagline}</h2>
      </div>

      <div className="relative bg-white px-6 sm:px-12 lg:px-36 py-10 min-h-[500px] flex items-center justify-center">

        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-0 top-0 h-96 w-auto object-cover"
        />

        <div className="grid grid-cols-1 items-center gap-12 w-full">

          <div className="flex flex-col items-center justify-center relative space-y-6">

            {/* LOGO */}
            <img
              src={currentKabinet.logo}
              className="w-2/3 lg:w-1/3 z-10"
              alt="Logo Kabinet"
            />

            {/* DROPDOWN */}
            <div className="relative w-64">

              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="w-full bg-gray-200 px-4 py-3 rounded-md flex justify-between items-center text-sm font-medium"
              >
                {selectedKabinet}
                <span>▼</span>
              </button>

              {openDropdown && (
                <div className="absolute z-50 w-full bg-gray-200 mt-1 rounded-md shadow-md overflow-hidden">

                  {kabinetList.map((kabinet) => (
                    <button
                      key={kabinet}
                      onClick={() => {
                        setSelectedKabinet(kabinet);
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-300 text-sm"
                    >
                      {kabinet}
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;
