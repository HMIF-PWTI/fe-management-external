import Button from "../Button";

type MarketCardProps = {
  image: string;
  nama_produk: string;
  harga: string;
  className?: string;
};

const generateWaLink = (productName: string): string => {
  const message = `Hallo ka, saya ingin membeli ${productName}, kira-kira bisa COD kapan yaa???`;
  const phone = "6281258142681";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const MarketCard: React.FC<MarketCardProps> = ({
  image,
  nama_produk,
  className,
  harga,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col border-2 p-5 rounded-xl text-primary2 w-fit ${className}`}
      >
        <img src={image} alt={nama_produk} className="rounded-xl mb-3 w-80 h-80 object-cover" />
        <h1>{nama_produk}</h1>
        <h2 className="font-semibold mt-2">{harga}</h2>
        <div className="flex mt-3 justify-center">
          <a
            href={generateWaLink(nama_produk)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-lg"
          >
            <Button variant="outline">Beli Sekarang</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
