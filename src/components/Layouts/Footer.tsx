import footer from "assets/footer.png";
import LogoHMIF from "assets/Logo/LogoHMIF.png";
import LogoDakshawira from "assets/Logo/LogoDakshawira.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, dolorem iusto corrupti maxime rem dolor consequuntur
              nostrum porro earum molestiae.
            </div>
          </div>
          <div>
            <h1 className="text-xl">INFORMASI</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <h1 className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo nam officiis asperiores a consectetur. Quam
              animi nihil magni vel.
            </h1>
          </div>
          <div>
            <h1 className="text-xl">MEDIA SOSIAL</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3 w-1/2">
              <a href="" className="flex">
                <FaInstagram className="text-lg mr-2" /> Instagram
              </a>
              <a href="" className="flex">
                <AiOutlineYoutube className="text-lg mr-2" /> Youtube
              </a>
              <a href="" className="flex">
                <FaTiktok className="text-sm mr-2" /> Tiktok
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl">KONTAK</h1>
            <hr className="w-1/4 border border-primary1 mt-2" />
            <div className="mt-3 space-y-3">
              <a href="" className="flex">
                <GoMail className="text-lg mr-2" /> hmifunikom@gmail.com
              </a>
              <a href="" className="flex">
                <FaPhoneAlt className="text-sm mr-3" /> 0812345678
              </a>
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
