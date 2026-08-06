import { motion } from "framer-motion";
import gerigi from "@/assets/gerigi.png";

const VideoProfilePages = () => {
  return (
    <section
      id="video-profile"
      className="relative bg-white px-6 py-16 sm:px-12 lg:px-36 lg:py-24 overflow-hidden"
    >
      <img
        src={gerigi}
        alt="Gerigi"
        className="hidden lg:block absolute right-0 top-10 h-96 w-auto object-cover scale-x-[-1] opacity-90"
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 grid w-full grid-cols-1 gap-10 rounded-[32px] border border-primary2/30 bg-white/80 p-6 shadow-2xl shadow-primary2/10 backdrop-blur-md lg:grid-cols-2 lg:gap-16 lg:p-12"
      >
        <div className="flex flex-col justify-center gap-6">
          <p className="w-fit rounded-full bg-primary2/10 px-4 py-2 text-sm font-semibold text-primary2">
            Tentang HMIF
          </p>

          <h1 className="text-3xl font-extrabold text-primary2 lg:text-5xl">
            Video Profil
          </h1>

          <p className="text-sm leading-relaxed text-gray-700 lg:text-justify lg:text-base">
            Video ini merupakan video perkenalan resmi dari kepengurusan
            Himpunan Mahasiswa Teknik Informatika (HMIF) UNIKOM untuk satu
            periode Kabinet Dakshawira (2024/2025). Menampilkan wajah-wajah
            fungsionaris dan berbagai program kerja unggulan, video ini menjadi
            representasi visi dan misi HMIF UNIKOM dalam menciptakan organisasi
            yang solid, profesional, dan inspiratif.
          </p>

          <div className="text-sm font-semibold text-primary2">
            <p>#MajuSolidJaya</p>
            <p>#SatuMisiSatuAksiSatuTujuan</p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <iframe
            src="https://www.youtube.com/embed/OFfpeRQpo4U"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full rounded-3xl shadow-xl"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoProfilePages;