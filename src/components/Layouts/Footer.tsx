import footer from "assets/footer.png";
import LogoHMIF from "assets/Logo/LogoHMIF.png";
import LogoDakshawira from "assets/Logo/LogoDakshawira.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="text-sm mt-28">
      <div
        className="relative bg-no-repeat bg-cover bg-top text-white px-16 py-10"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="grid grid-cols-4 w-full space-x-10  mt-10 px-20">
          <div className="flex items-start flex-col">
            <div className="flex justify-center items-center space-x-2 ">
              <img src={LogoHMIF} className="w-14" />
              <img src={LogoDakshawira} className="w-14" />
            </div>
            <hr className="w-1/2 border border-primary1 mt-2" />
            <div className="mt-3">
              Himpunan Mahasiswa Informatika (HMIF) UNIKOM adalah wadah
              pengembangan potensi, kreativitas, dan solidaritas bagi mahasiswa
              Teknik Informatika. Kami hadir untuk membangun generasi yang
              adaptif, inovatif, dan siap menghadapi tantangan masa depan.
            </div>
          </div>
          <div>
            <h1 className="text-xl">INFORMASI</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <h1 className="mt-3">
              <ul className="list-disc">
                <li>
                  Organisasi Mahasiswa Resmi di bawah Jurusan Teknik Informatika
                  UNIKOM
                </li>
                <li>
                  Aktif dalam kegiatan akademik, non-akademik, hingga pengabdian
                  masyarakat
                </li>
                <li>
                  Terbuka untuk kolaborasi dan kontribusi dari
                  seluruh elemen kampus
                </li>
              </ul>
            </h1>
          </div>
          <div>
            <h1 className="text-xl">MEDIA SOSIAL</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3 w-full">
              <a
                href="https://www.instagram.com/hmifunikom/"
                target="_blank"
                className="flex hover:underline"
              >
                <FaInstagram className="text-lg mr-2" />
                hmifunikom
              </a>
              <a
                href="https://www.youtube.com/@hmifunikom9377"
                target="_blank"
                className="flex hover:underline"
              >
                <AiOutlineYoutube className="text-lg mr-2" />
                hmifunikom9377
              </a>
              <a
                href="https://www.tiktok.com/@hmifunikom?_t=8jjzxwpqf3p&_r=1"
                target="_blank"
                className="flex hover:underline"
              >
                <FaTiktok className="text-lg mr-2" />
                hmifunikom
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAdgGMAInPduHcDwk0g"
                target="_blank"
                className="flex hover:underline"
              >
                <FaWhatsapp className="text-lg mr-2" />
                Portal IF
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl">KONTAK</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3">
              <a href="" className="flex hover:underline">
                <GoMail className="text-lg mr-2" /> hmifunikom@gmail.com
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6282259934384&text&type=phone_number&app_absent=0"
                target="_blank"
                className="flex hover:underline"
              >
                <FaPhoneAlt className="text-sm mr-3" /> 08225993438 (Sukma Novianti Tulak)
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6285797421462&text&type=phone_number&app_absent=0"
                target="_blank"
                className="flex hover:underline"
              >
                <FaPhoneAlt className="text-sm mr-3" /> 085797421462 (Salsya Fadillah)
              </a>
              <div>
                <button className="p-2 border border-white rounded-lg text-xs">Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 bg-primary2 border-t border-primary1 text-white">
        © HMIF. Allrights Reserved.
      </div>
    </div>
  );
};

export default Footer;
