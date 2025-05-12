import gerigi from "@/assets/gerigi.png";

const VideoProfilePages = () => {
  return (
    <div className="relative bg-white px-36 py-10 min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={gerigi}
        alt="Gerigi"
        className="absolute right-0 top-0 h-96 w-auto object-cover scale-x-[-1]"
      />
      <div className="grid grid-cols-2 gap-16 bg-white border-2 border-primary2 rounded-2xl p-10 w-full">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-4xl font-bold text-primary2">Vidio Profil</h1>
          <p className="text-sm text-gray-800 text-justify leading-relaxed">
            Vidio ini merupakan vidio perkenalan resmi dari kepengurusan
            Himpunan Mahasiswa Teknik Informatika (HMIF) UNIKOM untuk satu periode
            Kabinet Dakshawira (2024/2025). Menampilkan wajah-wajah fungsionaris
            dan berbagai program kerja unggulan, video ini menjadi representasi
            visi dan misi HMIF UNIKOM dalam menciptakan organisasi yang solid,
            profesional, dan inspiratif. Melalui video ini, kami ingin mengajak
            seluruh anggota untuk bersama-sama bergerak maju, bekerja cerdas,
            dan memberikan kontribusi terbaik bagi himpunan.
          </p>
          <div className="text-sm">
            <p>#MajuSolidJaya</p>
            <p>#KerjaKerasKerjaCerdasKerjaIkhlas</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/OFfpeRQpo4U"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoProfilePages;
