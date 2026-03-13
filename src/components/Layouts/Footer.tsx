import footer from "assets/footer.png";
import LogoHMIF from "assets/Logo/LogoHMIF.png";
import LogoDhinakara from "assets/Logo/LogoDhinakara.png";
import { FaInstagram, FaTiktok, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="text-sm mt-28">
      <div
        className="relative bg-no-repeat bg-cover bg-center text-white px-6 md:px-12 lg:px-16 py-10"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mt-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start">
            <div className="flex justify-center mt-12 sm:mt-0 items-center space-x-2">
              <img src={LogoHMIF} alt="Logo HMIF" className="w-12" />
              <img
                src={LogoDhinakara}
                alt="Logo Dakshawira"
                className="w-12"
              />
            </div>
            <hr className="w-1/2 border border-primary1 mt-2" />
            <div className="mt-3">
              Himpunan Mahasiswa Informatika (HMIF) UNIKOM adalah wadah
              pengembangan potensi, kreativitas, dan solidaritas bagi mahasiswa
              Teknik Informatika. Kami hadir untuk membangun generasi yang
              adaptif, inovatif, dan siap menghadapi tantangan masa depan.
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">INFORMASI</h2>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>
                Organisasi Mahasiswa Resmi di bawah Jurusan Teknik Informatika
                UNIKOM
              </li>
              <li>
                Aktif dalam kegiatan akademik, non-akademik, hingga pengabdian
                masyarakat
              </li>
              <li>
                Terbuka untuk kolaborasi dan kontribusi dari seluruh elemen
                kampus
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">MEDIA SOSIAL</h2>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3">
              <a
                href="https://www.instagram.com/hmifunikom/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaInstagram className="text-lg mr-2" />
                hmifunikom
              </a>
              <a
                href="https://www.youtube.com/@hmifunikom9377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <AiOutlineYoutube className="text-lg mr-2" />
                hmifunikom9377
              </a>
              <a
                href="https://www.tiktok.com/@hmifunikom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaTiktok className="text-lg mr-2" />
                hmifunikom
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaWhatsapp className="text-lg mr-2" />
                Portal IF
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">KONTAK</h2>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3">
              <a
                href="mailto:hmifunikom@gmail.com"
                className="flex items-center hover:underline"
              >
                <GoMail className="text-lg mr-2" />
                hmifunikom@gmail.com
              </a>
             <a
                href="https://api.whatsapp.com/send/?phone=6281365277899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaPhoneAlt className="text-sm mr-3" />
                +62 813-6527-7899 (Sakina)
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281311260499"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaPhoneAlt className="text-sm mr-3" />
                +62 813-1126-0499 (Andika)
              </a>
              <div>
                <button className="p-2 border border-white rounded-lg text-xs hover:bg-white hover:text-black transition-colors duration-200">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center px-4 py-2 bg-primary2 border-t border-primary1 text-white">
        © HMIF. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
