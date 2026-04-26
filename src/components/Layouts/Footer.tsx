import LogoHMIF from "assets/Logo/LogoHMIF.png";
import LogoDhinakara from "assets/Logo/LogoDhinakara.png";
import { FaInstagram, FaTiktok, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="text-sm mt-28">
      {/* Container utama menggunakan warna solid #332B22 */}
      <div className="bg-[#332B22] text-white px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12 max-w-7xl mx-auto">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3">
              <img src={LogoHMIF} alt="Logo HMIF" className="w-12" />
              <img
                src={LogoDhinakara}
                alt="Logo Dakshawira"
                className="w-12"
              />
            </div>
            {/* Garis bawah logo dengan warna sedikit lebih terang agar terlihat premium */}
            <hr className="w-20 border-[#4d4134] mt-4 mb-4" />
            <p className="leading-relaxed text-gray-300">
              Himpunan Mahasiswa Informatika (HMIF) UNIKOM adalah wadah
              pengembangan potensi, kreativitas, dan solidaritas bagi mahasiswa
              Teknik Informatika. Kami hadir untuk membangun generasi yang
              adaptif, inovatif, dan siap menghadapi tantangan masa depan.
            </p>
          </div>

          {/* Kolom 2: Informasi */}
          <div>
            <h2 className="text-lg font-bold tracking-wider">INFORMASI</h2>
            <hr className="w-10 border-[#4d4134] mt-2 mb-4" />
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Organisasi Mahasiswa Resmi di bawah Jurusan Teknik Informatika UNIKOM</li>
              <li>Aktif dalam kegiatan akademik, non-akademik, hingga pengabdian masyarakat</li>
              <li>Terbuka untuk kolaborasi dan kontribusi dari seluruh elemen kampus</li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div>
            <h2 className="text-lg font-bold tracking-wider">MEDIA SOSIAL</h2>
            <hr className="w-10 border-[#4d4134] mt-2 mb-4" />
            <div className="space-y-3">
              <a href="https://www.instagram.com/hmifunikom/" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-gray-400">
                <FaInstagram className="text-xl mr-3" /> hmifunikom
              </a>
              <a href="https://www.youtube.com/@hmifunikom9377" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-gray-400">
                <AiOutlineYoutube className="text-xl mr-3" /> hmifunikom9377
              </a>
              <a href="https://www.tiktok.com/@hmifunikom" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-gray-400">
                <FaTiktok className="text-xl mr-3" /> hmifunikom
              </a>
              <a href="https://whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-gray-400">
                <FaWhatsapp className="text-xl mr-3" /> Portal IF
              </a>
            </div>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h2 className="text-lg font-bold tracking-wider">KONTAK</h2>
            <hr className="w-10 border-[#4d4134] mt-2 mb-4" />
            <div className="space-y-3 text-gray-300">
              <a href="mailto:hmifunikom@gmail.com" className="flex items-center transition-colors hover:text-white">
                <GoMail className="text-xl mr-3" /> hmifunikom@gmail.com
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6281365277899" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-white">
                <FaPhoneAlt className="text-sm mr-4" /> +62 813-6527-7899 (Sakina)
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6281311260499" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-white">
                <FaPhoneAlt className="text-sm mr-4" /> +62 813-1126-0499 (Andika)
              </a>
              <div className="pt-4">
                <button className="px-6 py-2 border border-gray-400 rounded-md text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-[#332B22] transition-all duration-300">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="bg-[#2a231c] py-4 border-t border-[#44392e] text-center text-gray-400">
        <p>© {new Date().getFullYear()} HMIF. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;