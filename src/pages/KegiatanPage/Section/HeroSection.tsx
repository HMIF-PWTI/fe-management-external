import logo from "@/assets/Logo/LogoDhinakara.png";

const HeroSection: React.FC = () => {
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
            Informasi kegiatan Himpunan Mahasiswa Teknik Informatika sebagai
            wadah pengembangan akademik, non-akademik, kekeluargaan, dan
            kolaborasi antar mahasiswa.
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
    </section>
  );
};

export default HeroSection;