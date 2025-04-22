import heroImage from "assets/hmif.jpg";

interface HeroSectionProps {
  scrollToVision: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToVision }) => {
  return (
    <div className="h-screen -mt-20 px-36 grid grid-cols-2 gap-10 items-center justify-center">
      <div className=" text-5xl font-bold space-y-3">
        <h1>HMIF UNIKOM</h1>
        <h1>2024/2025</h1>
        <h1 className="text-lg font-light">
          Selamat Datang Di Website HMIF UNIKOM! <br /> Tempat berkumpulnya
          insan-inspiratif: brilian dalam berpikir, kreatif dalam berkarya.
          UNIKOM.
        </h1>
        <h2 className="text-lg font-light">#MajuSolidJaya</h2>
        <button
          onClick={scrollToVision}
          className="text-sm p-2 bg-primary2 rounded-lg text-white font-light px-3 border border-primary2 hover:bg-white hover:text-primary2 hover:border-primary2 transition-all"
        >
          Selengkapnya
        </button>
      </div>
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero"
          className="relative z-10 max-w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
