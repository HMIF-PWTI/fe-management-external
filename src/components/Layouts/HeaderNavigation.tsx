import LogoHMIF from "@/assets/Logo/LogoHMIF.png";
import LogoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { GiMagicPortal } from "react-icons/gi";
import { useEffect, useState } from "react";

const HeaderNavigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <div className={`sticky top-0 z-50 px-36 py-4 flex justify-between items-center bg-white shadow-lg border-dark1 transition-transform duration-300 ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="flex space-x-2 items-center justify-center">
        <img src={LogoHMIF} alt="" className="w-12" />
        <img src={LogoDakshawira} alt="" className="w-10" />
      </div>

      <div className="space-x-6 text-sm text-md text-hitam p-2">
        <a
          href="/"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Home
        </a>
        <a
          href="/about"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          About
        </a>
        <a
          href="/blog"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Blog
        </a>
        <a
          href="/ifpedia"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          IF-Pedia
        </a>
        <a
          href="/kegiatan"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Kegiatan
        </a>
        <a
          href="lapakkwu"
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Lapak KWU
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-sm text-hitam hover:scale-110 transform transition duration-200">
          Kontak
        </button>

        <button className="flex items-center hover:scale-105 gap-2 px-4 py-2 rounded-lg text-sm text-white bg-primary2 border border-primary2 hover:border-primary2 hover:text-primary2 hover:bg-white transition-all">
          Portal IF
          <GiMagicPortal size={16} />
        </button>
      </div>
    </div>
  );
};

export default HeaderNavigation;
