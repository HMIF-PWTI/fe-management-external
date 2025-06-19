import Button from "../Button";

type MarketCardProps = {
  image: string;
  nama_produk: string;
  harga: string;
  className?: string;
};

const waNumber = import.meta.env.VITE_WA_NUMBER;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const generateWaLink = (productName: string): string => {
  const message = `Hallo ka, saya ingin membeli ${productName}, kira-kira bisa COD kapan yaa???`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};

const MarketCard: React.FC<MarketCardProps> = ({
  image,
  nama_produk,
  className,
  harga,
}) => {
  return (
    <div
      className={`flex flex-col border-2 p-5 rounded-xl text-primary2 w-full h-full ${className}`}
    >
      <img
        src={`${imageBaseUrl}/${image}`}
        alt={nama_produk}
        className="rounded-xl mb-3 w-full aspect-square object-cover"
      />
      <div className="flex flex-col flex-grow">
        <p className="font-bold text-lg">{nama_produk}</p>
        <p className="font-semibold mt-1">{harga}</p>
      </div>
      <div className="flex mt-3 justify-center pt-2">
        <a
          href={generateWaLink(nama_produk)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Beli Sekarang</Button>
        </a>
      </div>
    </div>
  );
};

export default MarketCard;
