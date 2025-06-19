import LogoHMIF from "@/assets/Logo/LogoHMIF.png";
import LogoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { GiMagicPortal } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const HeaderNavigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setIsMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex justify-between items-center px-4 md:px-8 lg:px-36 py-4">
        <div className="flex space-x-2 items-center justify-center">
          <img src={LogoHMIF} alt="Logo HMIF" className="w-12" />
          <img src={LogoDakshawira} alt="Logo Dakshawira" className="w-10" />
        </div>

        <nav className="hidden lg:flex space-x-6 text-sm text-hitam p-2 items-center">
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
            href="/lapakkwu"
            className="transform hover:scale-125 transition duration-200 inline-block"
          >
            Lapak KWU
          </a>
          <a
            href="/infokp"
            className="transform hover:scale-125 transition duration-200 inline-block"
          >
            Info KP
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-sm text-hitam hover:scale-110 transform transition duration-200">
            Kontak
          </button>
          <a
            href="https://www.whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg"
          >
            <button className="flex items-center hover:scale-105 gap-2 px-4 py-2 rounded-lg text-sm text-white bg-primary2 border border-primary2 hover:border-primary2 hover:text-primary2 hover:bg-white transition-all">
              Portal IF
              <GiMagicPortal size={16} />
            </button>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-hitam focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-6 space-y-4">
          <a href="/" onClick={handleLinkClick} className="text-hitam text-lg">
            Home
          </a>
          <a
            href="/about"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            About
          </a>
          <a
            href="/blog"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            Blog
          </a>
          <a
            href="/ifpedia"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            IF-Pedia
          </a>
          <a
            href="/kegiatan"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            Kegiatan
          </a>
          <a
            href="/lapakkwu"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            Lapak KWU
          </a>
          <a
            href="/infokp"
            onClick={handleLinkClick}
            className="text-hitam text-lg"
          >
            Info KP
          </a>
          <hr className="w-3/4 border-gray-300" />
          <button onClick={handleLinkClick} className="text-hitam text-lg">
            Kontak
          </button>
          <a
            href="https://www.whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={handleLinkClick}
          >
            <button className="flex w-full justify-center items-center hover:scale-105 gap-2 px-4 py-2 rounded-lg text-sm text-white bg-primary2 border border-primary2 hover:border-primary2 hover:text-primary2 hover:bg-white transition-all">
              Portal IF
              <GiMagicPortal size={16} />
            </button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderNavigation;
