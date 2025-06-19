import { forwardRef, useState } from "react";
import gerigi from "@/assets/gerigi.png";
import kuda from "@/assets/Logo/LogoHMIF.png";

interface VisionMissionPagesProps {}

const VisionMissionPages = forwardRef<HTMLDivElement, VisionMissionPagesProps>(
  (_, ref) => {
    const [showAll, setShowAll] = useState(false);

    const misiList = [
      "HMIF UNIKOM berusaha membina iman dan akhlak anggota HMIF UNIKOM khususnya, serta Mahasiswa Teknik Informatika pada umumnya.",
      "HMIF UNIKOM berusaha mengaktualisasikan dan mengembangkan potensi intelektual anggota HMIF UNIKOM yang diatur dalam Garis-Garis Besar Haluan Kebijakan Organisasi untuk melaksanakan secara sadar dan sistematis, serta pengkaderan untuk mengembangkan potensi kepemimpinan.",
      "HMIF UNIKOM berusaha mengapresiasikan dan menganalisis masalah-masalah perkembangan yang ada disekitar lingkungan kampus Universitas Komputer Indonesia.",
      "HMIF UNIKOM berusaha mempererat tali silaturahmi antara HMIF UNIKOM pada khususnya dan seluruh Mahasiswa Program Studi Teknik Informatika Universitas Komputer Indonesia pada umumnya.",
      "HMIF UNIKOM berusaha mengadakan kerjasama dengan Instansi Pemerintahan, swasta dan juga organisasi-organisasi Pelajar, Mahasiswa, Pemuda dan Masyarakat.",
      "HMIF UNIKOM harus melakukan usaha-usaha yang tidak bertentangan dengan Anggaran Dasar HMIF UNIKOM dan berguna untuk mencapai tujuan HMIF UNIKOM.",
      "Menumbuhkembangkan dan melestarikan kebudayaan khususnya nilai-nilai positif dan budaya Indonesia.",
      "Meningkatkan daya berfikir kritis, intelektual, ilmu pengetahuan dan teknologi di kalangan mahasiswa UNIKOM khususnya Program Studi Teknik Informatika.",
      "Menjunjung tinggi pluralitas mahasiswa di civitas.",
      "Ikut serta dalam menciptakan mahasiswa yang sadar terhadap dunia perpolitikan dalam ruang lingkup Universitas.",
    ];

    const visibleMisi = showAll ? misiList : misiList.slice(0, 2);

    return (
      <div
        ref={ref}
        className="relative bg-white px-6 sm:px-12 lg:px-36 py-16 min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-0 top-12 h-96 w-auto object-cover"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">
          <div className="space-y-4">
            <div className="flex space-x-3 justify-end items-end">
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
            </div>
            <div className="flex items-center justify-center relative">
              <div className="hidden lg:block absolute ring-2 ring-primary2 w-64 h-40 rounded-[50px] left-[60px] -top-10 z-0"></div>
              <div className="hidden lg:block absolute ring-2 ring-primary2 w-64 h-40 rounded-[50px] left-[260px] top-56 z-0"></div>
              <img src={kuda} className="w-1/2 lg:w-2/3 z-10" alt="Logo HMIF" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-primary2 text-2xl lg:text-3xl font-bold mb-4">
                Visi
              </h1>
              <h2 className="text-left lg:text-justify text-sm leading-relaxed">
                Sebagai Salah Satu Organisasi Intra Kampus, HMIF didirikan
                dengan tujuan untuk ikut mengupayakan tercapainya tujuan
                pendidikan dan pengajaran teknologi informasi di lingkungan
                program studi teknik informatika serta terbentuknya insan
                akademis, pencipta dan pengabdi yang bertakwa kepada Tuhan Yang
                Maha Esa, berbudi luhur, beretos kerja, memiliki idealisme dan
                integritas yang tinggi.
              </h2>
            </div>
            <div>
              <h1 className="text-primary2 text-2xl lg:text-3xl font-bold mb-4">
                Misi
              </h1>
              <ul className="list-disc list-outside space-y-2 text-left lg:text-justify text-sm leading-relaxed">
                {visibleMisi.map((misi, index) => (
                  <li key={index} className="pl-2">
                    {misi}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-5 px-2 text-primary2 text-sm font-semibold hover:underline"
              >
                {showAll ? "Lebih Sedikit" : "Baca Selengkapnya"}
              </button>
            </div>
            <div className="flex space-x-3 justify-end items-end">
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default VisionMissionPages;
