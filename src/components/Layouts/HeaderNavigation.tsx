import LogoHMIF from "@/assets/Logo/LogoHMIF.png";
import LogoDhinakara from "@/assets/Logo/LogoDhinakara.png";
import { GiMagicPortal } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "IF-Pedia", href: "/ifpedia" },
  { name: "Kegiatan", href: "/kegiatan" },
  { name: "Lapak KWU", href: "/lapakkwu" },
  { name: "Info KP", href: "/infokp" },
  { name: "Kabinet", href: "/kabinet" },
];

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <header className="sticky top-0 z-[9999] border-b border-primary2/10 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-36">
        <a href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={LogoHMIF} alt="Logo HMIF" className="w-11" />
            <img src={LogoDhinakara} alt="Logo Dhinakara" className="w-10" />
          </div>

          <div className="hidden sm:block leading-tight">
            <h1 className="text-sm font-bold text-primary2">HMIF UNIKOM</h1>
            <p className="text-[11px] text-gray-500">Kabinet Dhinakara</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary2 text-white"
                    : "text-gray-700 hover:bg-primary2/10 hover:text-primary2"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hmifunikom@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary2/10 hover:text-primary2"
          >
            Kontak
          </a>

          <a
            href="https://www.whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-primary2 bg-primary2 px-5 py-2 text-sm font-semibold text-white hover:bg-white hover:text-primary2"
          >
            Portal IF
            <GiMagicPortal size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-primary2/10 p-2 text-primary2 lg:hidden"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute left-0 top-full z-[9999] flex w-full flex-col gap-2 border-t border-primary2/10 bg-white px-6 py-5 shadow-xl lg:hidden">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-primary2 text-white"
                    : "text-gray-700 hover:bg-primary2/10 hover:text-primary2"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hmifunikom@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700"
          >
            Kontak
          </a>

          <a
            href="https://www.whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary2 px-4 py-3 text-sm font-semibold text-white"
          >
            Portal IF
            <GiMagicPortal size={16} />
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderNavigation;