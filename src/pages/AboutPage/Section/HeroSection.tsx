import gerigi from "@/assets/gerigi.png";
import logo from "@/assets/Logo/LogoDhinakara.png";

const misiList = [
  "Membangun budaya profesionalisme dan kekeluargaan di antara fungsionaris untuk menciptakan lingkungan kerja yang harmonis, solid, dan produktif.",
  "Memastikan komunikasi yang efektif dan terbuka antara himpunan dan mahasiswa, guna memenuhi kebutuhan serta menampung aspirasi mereka.",
  "Merancang program-program inovatif yang mengasah keterampilan dan minat mahasiswa dalam bidang akademik maupun non-akademik.",
  "Mendorong kolaborasi aktif antara mahasiswa, dosen, dan pihak terkait untuk mempererat hubungan serta memperluas jaringan di dalam dan luar kampus.",
];

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-20 px-6 text-center animate-fade-up">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary2">
          KABINET DHINAKARA
        </h1>
        <h2 className="mt-2 text-sm lg:text-base text-gray-700">
          Satu Misi, Satu Aksi, Satu Tujuan
        </h2>
      </div>

      <div className="relative bg-white px-6 sm:px-12 lg:px-36 py-10 lg:py-16 min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={gerigi}
          alt=""
          aria-hidden="true"
          width={384}
          height={384}
          loading="lazy"
          decoding="async"
          className="hidden lg:block absolute left-0 top-0 h-96 w-auto object-cover pointer-events-none select-none animate-float-slow"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">
          <div className="flex items-center justify-center relative animate-scale-in">
            <img
              src={logo}
              alt="Logo Kabinet Dhinakara"
              width={420}
              height={420}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-2/3 lg:w-1/2 h-auto z-10 drop-shadow-xl"
            />
          </div>

          <div className="space-y-6 animate-fade-left">
            <div>
              <h1 className="text-primary2 text-xl lg:text-2xl font-bold">
                Visi
              </h1>

              <hr className="mb-4 border-2 border-primary2 rounded-full w-20" />

              <p className="text-left lg:text-justify text-sm leading-relaxed text-gray-800">
                Menjadikan Himpunan Teknik Informatika yang solid dan cemerlang,
                demi terwujudnya HMIF yang inovatif, kolaboratif, serta suportif
                dalam mendukung kemajuan akademis dan non-akademis mahasiswa
                Teknik Informatika.
              </p>
            </div>

            <div>
              <h1 className="text-primary2 text-xl lg:text-2xl font-bold">
                Misi
              </h1>

              <hr className="mb-4 border-2 border-primary2 rounded-full w-20" />

              <ul className="list-disc list-outside space-y-2 text-left lg:text-justify text-sm leading-relaxed text-gray-800">
                {misiList.map((misi, index) => (
                  <li key={index} className="pl-2">
                    {misi}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-3 justify-end items-end">
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5 animate-pulse-soft" />
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5 animate-pulse-soft delay-150" />
              <div className="ring-4 ring-primary2 rounded-full w-5 h-5 animate-pulse-soft delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;