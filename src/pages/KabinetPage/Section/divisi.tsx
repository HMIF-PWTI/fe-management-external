import React, { useState } from "react";
import gerigi from "@/assets/gerigi.png";
import logoDhinakara from "@/assets/Logo/LogoDhinakara.png";
import logoDakshawira from "@/assets/Logo/LogoDakshawira.png";

// --- DATA SOURCE ---
export const intiData = [
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457145/Icad_fbjvwn.jpg", position: "KETUA HIMPUNAN", name: "Muhammad Irsyaad Fatahillah" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457346/Zepri_nsokba.jpg", position: "WAKIL KETUA HIMPUNAN", name: "Jafar Shidiq" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457343/Atta_prq7kc.jpg", position: "SEKRETARIS UMUM", name: "Muhammad Andrata" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457341/Rania_oky0ei.jpg", position: "BENDAHARA UMUM", name: "Rania Shahinaz" },
];

export const pwtiData = [
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457344/Rifqi_exyrc5.jpg", position: "KEPALA DIVISI", name: "Rifqi Muhammad Hamzah" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472268/Aldi_nmdtfk.jpg", position: "PENGURUS", name: "Aldi Nauval" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472267/Farhan_srvk8g.jpg", position: "PENGURUS", name: "Farhan Bachtiar" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472272/Fahri_ijkvzp.jpg", position: "PENGURUS", name: "Fahri Arsyah" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472273/Alfian_orwl7h.jpg", position: "PENGURUS", name: "Alfian Putra" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472271/Efelin_sbxoif.jpg", position: "PENGURUS", name: "Efelin Anindya" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472269/Indri_bkvct3.jpg", position: "PENGURUS", name: "Indri Tri Puspita" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472269/Barka_zkcymh.jpg", position: "ANGGOTA MUDA", name: "Barka Tirta" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472268/Rizki_aqsrt1.jpg", position: "ANGGOTA MUDA", name: "Muhamad Rizky Fadilah" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472272/Vincent_wjx4x8.jpg", position: "ANGGOTA MUDA", name: "Vincent Luhilima" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472268/Irma_iu3qnu.jpg", position: "ANGGOTA MUDA", name: "Ai Irma Enjelina" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472267/Devina_rzemzq.jpg", position: "ANGGOTA MUDA", name: "Devina" },
  { image: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746472272/Riska_for4fq.jpg", position: "ANGGOTA MUDA", name: "Riska Oktaviani" },
];

// --- MINI COMPONENT: MEMBER CARD ---
const MemberCard: React.FC<{ name: string; position: string; image: string }> = ({ name, position, image }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-200">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-[#002B5B] font-extrabold text-[10px] md:text-xs uppercase tracking-tighter leading-tight h-8 flex items-center">
      {position}
    </h3>
    <p className="text-gray-700 text-[11px] md:text-sm font-medium mt-1 line-clamp-2 uppercase">
      {name}
    </p>
  </div>
);

// --- MAIN COMPONENT ---
type KabinetKey = "Kabinet Dakshawira" | "Kabinet Dhinakara";

const kabinetData: Record<KabinetKey, { title: string; tagline: string; logo: string }> = {
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

const Divisi: React.FC = () => {
  const [selectedKabinet, setSelectedKabinet] = useState<KabinetKey>("Kabinet Dakshawira");
  const [openDropdown, setOpenDropdown] = useState(false);

  const kabinetList = Object.keys(kabinetData) as KabinetKey[];
  const currentKabinet = kabinetData[selectedKabinet];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* HEADER SECTION */}
      <div className="flex flex-col items-center justify-center pt-16 mb-10 px-6 text-center">
        <h1 className="text-3xl lg:text-5xl font-black text-[#002B5B] mb-2">
          {currentKabinet.title}
        </h1>
        <h2 className="text-lg lg:text-xl italic text-gray-600 font-medium tracking-wide">
          "{currentKabinet.tagline}"
        </h2>
      </div>

      {/* LOGO & DROPDOWN SECTION */}
      <div className="relative bg-white px-6 py-12 flex items-center justify-center overflow-hidden border-y border-gray-100">
        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-[-5%] top-[-10%] h-80 opacity-20 pointer-events-none"
        />

        <div className="flex flex-col items-center space-y-8 z-10">
          <img
            src={currentKabinet.logo}
            className="w-48 md:w-64 drop-shadow-2xl transition-all duration-500"
            alt="Logo Kabinet"
          />

          <div className="relative w-72">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-[#002B5B] text-white px-5 py-3 rounded-full flex justify-between items-center text-sm font-bold shadow-lg"
            >
              {selectedKabinet}
              <span className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}>▼</span>
            </button>

            {openDropdown && (
              <div className="absolute z-50 w-full bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {kabinetList.map((kabinet) => (
                  <button
                    key={kabinet}
                    onClick={() => {
                      setSelectedKabinet(kabinet);
                      setOpenDropdown(false);
                    }}
                    className="w-full text-left px-6 py-4 hover:bg-blue-50 text-[#002B5B] font-semibold text-sm border-b last:border-none border-gray-50"
                  >
                    {kabinet}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MEMBER GRID: PENGURUS INTI */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#002B5B] inline-block border-b-4 border-yellow-400 pb-2">
                PENGURUS INTI
            </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {intiData.map((item, idx) => (
            <MemberCard key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-4">
          <hr className="border-gray-200" />
      </div>

      {/* MEMBER GRID: DIVISI PWTI */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#002B5B] uppercase leading-tight">
                DIVISI <br className="md:hidden" />
                <span className="text-blue-600">PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI</span>
            </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {pwtiData.map((item, idx) => (
            <MemberCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Divisi;