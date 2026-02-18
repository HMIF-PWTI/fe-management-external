import gerigi from "@/assets/gerigi.png";
import logo from "@/assets/Logo/LogoDhinakara.png";
import { useState } from "react";

const HeroSection: React.FC = () => {
  const [showAll] = useState(false);

  const misiList = [
    "Membangun Budaya Profesionalisme Dan Kekeluargaan Di Antara Fungsionaris Untuk Menciptakan Lingkungan Kerja Yang Harmonis, Solid, Dan Produktif",
    "Memastikan Komunikasi Yang Efektif Dan Terbuka Antara Himpunan Dan Mahasiswa, Guna Memenuhi Kebutuhan Serta Menampung Aspirasi Mereka",
    "Merancang Program-Program Inovatif Yang Mengasah Keterampilan Dan Minat Mahasiswa Dalam Bidang Akademik Maupun Non-Akademik",
    "Mendorong Kolaborasi Aktif Antara Mahasiswa, Dosen, Dan Pihak Terkait Untuk Mempererat Hubungan Serta Memperluas jaringan Di Dalam Dan Luar Kampus",
  ];

  const visibleMisi = showAll ? misiList : misiList.slice(0, 4);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-20 px-6 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold">KABINET DHINAKARA</h1>
        <h2>Satu Misi, Satu Aksi, Satu Tujuan</h2>
      </div>
      <div className="relative bg-white px-6 sm:px-12 lg:px-36 py-10 min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-0 top-0 h-96 w-auto object-cover"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">
          <div className="flex items-center justify-center relative">
            <img src={logo} className="w-2/3 lg:w-1/2 z-10" alt="Logo HMIF" />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-primary2 text-xl lg:text-2xl font-bold">
                Visi
              </h1>
              <hr className="mb-4 border-2 border-primary2 rounded-full w-20" />
              <h2 className="text-left lg:text-justify text-sm leading-relaxed">
                Menjadikan Himpunan Teknik Informatika Yang Solid Dan Cemerlang,
                Demi Terwujudnya HMIF Yang Inovatif, Kolaboratif, Serta Suportif
                Dalam Mendukung Kemajuan Akademis Dan Non-Akademis Mahasiswa
                Teknik Informatika.
              </h2>
            </div>
            <div>
              <h1 className="text-primary2 text-xl lg:text-2xl font-bold">
                Misi
              </h1>
              <hr className="mb-4 border-2 border-primary2 rounded-full w-20" />
              <ul className="list-disc list-outside space-y-2 text-left lg:text-justify text-sm leading-relaxed">
                {visibleMisi.map((misi, index) => (
                  <li key={index} className="pl-2">
                    {misi}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-3 justify-end items-end">
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
