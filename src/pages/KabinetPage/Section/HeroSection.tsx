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
        <div className="grid grid-cols-1 items-center gap-12 w-full">
          <div className="flex items-center justify-center relative">
            <img src={logo} className="w-2/3 lg:w-1/3 z-10" alt="Logo HMIF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
