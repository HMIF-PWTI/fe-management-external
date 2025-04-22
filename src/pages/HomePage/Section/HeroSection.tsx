import heroImage from "assets/hmif.jpg";
import keren from "assets/keren2.png"
import keren2 from "assets/keren3.png"
import garis4 from "assets/keren.png"

interface HeroSectionProps {
  scrollToVision: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToVision }) => {
  return (
    <div className="h-screen -mt-20 px-36 grid grid-cols-2 gap-10 items-center justify-center">
      <div className=" text-5xl font-bold space-y-3">
        <img src={keren} className="absolute w-64 top-[85px] -left-[150px] scale-y-[-1]" />
        <img src={keren} className="absolute w-64 top-[589px] -left-[150px]" />
        <h1 className="animate-slide-in">HMIF UNIKOM</h1>
        <h1 className="animate-slide-in">2024/2025</h1>
        <h1 className="text-lg font-light animate-slide-in">
          Selamat Datang Di Website HMIF UNIKOM! <br /> Tempat berkumpulnya
          insan-inspiratif: brilian dalam berpikir, kreatif dalam berkarya.
          UNIKOM.
        </h1>
        <h2 className="text-lg font-light animate-slide-in">#MajuSolidJaya</h2>
        <button
          onClick={scrollToVision}
          className="animate-slide-in text-sm p-2 bg-primary2 rounded-lg text-white font-light px-3 border border-primary2 hover:bg-white hover:text-primary2 hover:border-primary2 transition-all"
        >
          Selengkapnya
        </button>
      </div>
      <div className="relative">
        <div className="ring-2 ring-primary2 w-[376px] h-64 rounded-xl absolute animate-slide-in -left-5 -top-5"></div>
        <div className="ring-2 ring-primary2 w-64 h-64 rounded-xl absolute animate-slide-in -right-5 -bottom-5"></div>
        <img
          src={heroImage}
          alt="Hero"
          className="relative z-10 max-w-full rounded-md animate-slide-in"
        />
      </div>
    </div>
  );
};

export default HeroSection;
