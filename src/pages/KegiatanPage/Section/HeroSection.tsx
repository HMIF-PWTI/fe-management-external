import logo from "@/assets/Logo/LogoDhinakara.png";

const HeroSection: React.FC = () => {
  const kegiatanList = [
    {
      title: "Musyawarah Besar HMIF",
      date: "12 Mei 2026",
      desc: "Kegiatan tahunan untuk membahas laporan kepengurusan, evaluasi program kerja, serta pemilihan kepengurusan baru.",
    },
    {
      title: "Seminar Teknologi",
      date: "20 Mei 2026",
      desc: "Kegiatan edukatif untuk menambah wawasan mahasiswa Informatika mengenai perkembangan teknologi terbaru.",
    },
    {
      title: "Workshop Pemrograman",
      date: "28 Mei 2026",
      desc: "Pelatihan praktis untuk meningkatkan kemampuan mahasiswa dalam bidang coding, web development, dan problem solving.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white">
      <style>
        {`
          @keyframes waveMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .wave-animate {
            animation: waveMove 8s linear infinite;
          }
        `}
      </style>

      <div className="relative bg-white px-6 pt-20 pb-28 text-center overflow-hidden">
        <div className="relative z-10">
          <img src={logo} alt="Logo HMIF" className="w-24 mx-auto mb-6" />

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Kegiatan HMIF
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm lg:text-base text-gray-600 leading-relaxed">
            Informasi kegiatan Himpunan Mahasiswa Teknik Informatika sebagai wadah
            pengembangan akademik, non-akademik, kekeluargaan, dan kolaborasi
            antar mahasiswa.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="wave-animate relative block w-[200%] h-24"
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,120 L0,120 Z"
              className="fill-cyan-100 opacity-80"
            />
          </svg>

          <svg
            className="wave-animate absolute bottom-0 left-0 block w-[200%] h-20"
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
            style={{ animationDuration: "12s" }}
          >
            <path
              d="M0,80 C240,20 480,120 720,80 C960,40 1200,110 1440,80 C1680,20 1920,120 2160,80 C2400,40 2640,110 2880,80 L2880,120 L0,120 Z"
              className="fill-blue-100 opacity-70"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400 -translate-x-1/2" />

        <div className="space-y-14">
          {kegiatanList.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-cyan-400 items-center justify-center text-sm font-bold text-cyan-600 z-10">
                {index + 1}
              </div>

              <div
                className={`${
                  index % 2 === 0
                    ? "lg:pr-16"
                    : "lg:pl-16 lg:col-start-2"
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                  <p className="text-xs font-semibold text-gray-500 mb-3">
                    Nama Kegiatan
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>

                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-800">
                        Tanggal:
                      </span>{" "}
                      {item.date}
                    </p>

                    <p className="leading-relaxed">
                      <span className="font-semibold text-gray-800">
                        Deskripsi:
                      </span>{" "}
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`hidden lg:block ${
                  index % 2 === 0
                    ? "lg:pl-16"
                    : "lg:pr-16 lg:col-start-1 lg:row-start-1"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;