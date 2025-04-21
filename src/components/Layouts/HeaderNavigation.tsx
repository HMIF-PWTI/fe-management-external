import LogoHMIF from "@/assets/Logo/LogoHMIF.png";
import LogoDakshawira from "@/assets/Logo/LogoDakshawira.png";
import { FaCartShopping } from "react-icons/fa6";

const HeaderNavigation = () => {
  return (
    <div className="flex justify-between px-36 py-4 bg-white shadow-lg border-dark1 items-center">
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
          href=""
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Blog
        </a>
        <a
          href=""
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          IF-Pedia
        </a>
        <a
          href=""
          className="transform hover:scale-125 transition duration-200 inline-block"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-sm text-hitam hover:scale-110 transform transition duration-200">
          Report
        </button>

        <button className="flex items-center hover:scale-105 gap-2 px-4 py-2 rounded-lg text-sm text-white bg-primary2 border border-primary2 hover:border-primary2 hover:text-primary2 hover:bg-white transition-all">
          Lapak KWU
          <FaCartShopping size={16} />
        </button>
      </div>
    </div>
  );
};

export default HeaderNavigation;
