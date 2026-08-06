import { motion } from "framer-motion";
import heroImage from "@/assets/hmif.jpg";
import keren from "@/assets/keren2.png";

interface HeroSectionProps {
  scrollToVision: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToVision }) => {
  return (
    <section className="relative min-h-screen -mt-20 flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-slate-100 px-6 pt-28 lg:px-36 lg:pt-20">
      <div className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-primary2/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-primary2/5 blur-3xl" />

      <img
        src={keren}
        alt=""
        className="hidden lg:block absolute w-64 top-[85px] -left-[150px] scale-y-[-1] opacity-80"
      />
      <img
        src={keren}
        alt=""
        className="hidden lg:block absolute w-64 bottom-10 -left-[150px] opacity-80"
      />

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 inline-block rounded-full border border-primary2/20 bg-white px-4 py-2 text-sm font-semibold text-primary2 shadow-sm">
            Kabinet Dhinakara 2025/2026
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
            HMIF UNIKOM <br />
            {/* <span className="text-primary2">2025/2026</span> */}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 lg:text-lg">
            Selamat Datang Di Website HMIF UNIKOM! Tempat berkumpulnya
            insan inspiratif: brilian dalam berpikir, kreatif dalam berkarya.
          </p>

          <p className="mt-5 text-lg font-semibold text-primary2">
            #MajuSolidJaya
          </p>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <button
              onClick={scrollToVision}
              className="rounded-xl border border-primary2 bg-primary2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary2/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary2"
            >
              Selengkapnya
            </button>

            <a
              href="#video-profile"
              className="rounded-xl border border-primary2/20 bg-white px-6 py-3 text-sm font-semibold text-primary2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary2"
            >
              Lihat Video
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 hidden h-64 w-[376px] rounded-3xl border-2 border-primary2 lg:block" />
          <div className="absolute -bottom-5 -right-5 hidden h-64 w-64 rounded-3xl border-2 border-primary2 lg:block" />

          <motion.img
            src={heroImage}
            alt="Hero HMIF"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mx-auto w-full rounded-3xl object-cover shadow-2xl lg:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;