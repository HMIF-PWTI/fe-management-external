import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
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

    const visibleMisi = showAll ? misiList : misiList.slice(0, 4);

    return (
      <section
        ref={ref}
        className="relative bg-gradient-to-br from-white via-white to-slate-100 px-6 py-16 sm:px-12 lg:px-36 lg:py-24 overflow-hidden"
      >
        <img
          src={gerigi}
          alt="Gerigi"
          className="hidden lg:block absolute left-0 top-20 h-96 w-auto object-cover opacity-90"
        />

        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-primary2/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -top-8 left-10 hidden h-44 w-72 rounded-[50px] border-2 border-primary2 lg:block" />
            <div className="absolute bottom-4 right-10 hidden h-44 w-72 rounded-[50px] border-2 border-primary2 lg:block" />

            <motion.img
              src={kuda}
              alt="Logo HMIF"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-2/3 drop-shadow-2xl lg:w-3/4"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 w-fit rounded-full bg-primary2/10 px-4 py-2 text-sm font-semibold text-primary2">
                Arah Organisasi
              </p>

              <h1 className="mb-4 text-3xl font-extrabold text-primary2 lg:text-5xl">
                Visi
              </h1>

              <p className="text-sm leading-relaxed text-gray-700 lg:text-justify lg:text-base">
                Sebagai Salah Satu Organisasi Intra Kampus, HMIF didirikan
                dengan tujuan untuk ikut mengupayakan tercapainya tujuan
                pendidikan dan pengajaran teknologi informasi di lingkungan
                program studi teknik informatika serta terbentuknya insan
                akademis, pencipta dan pengabdi yang bertakwa kepada Tuhan Yang
                Maha Esa, berbudi luhur, beretos kerja, memiliki idealisme dan
                integritas yang tinggi.
              </p>
            </div>

            <div>
              <h1 className="mb-5 text-3xl font-extrabold text-primary2 lg:text-5xl">
                Misi
              </h1>

              <div className="grid grid-cols-1 gap-4">
                {visibleMisi.map((misi, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl border border-primary2/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary2/30 hover:shadow-xl"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary2 text-sm font-bold text-white">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-relaxed text-gray-700">
                        {misi}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-6 rounded-xl border border-primary2 bg-primary2 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary2"
              >
                {showAll ? "Lebih Sedikit" : "Baca Selengkapnya"}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
);

VisionMissionPages.displayName = "VisionMissionPages";

export default VisionMissionPages;