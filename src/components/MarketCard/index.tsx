import Button from "../Button";

type MarketCardProps = {
  image: string;
  name: string;
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
  name,
  className,
  harga,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col border-2 p-5 rounded-xl text-primary2 w-fit ${className}`}
      >
        <img src={image} alt={name} className="rounded-xl mb-3 w-80" />
        <h1>{name}</h1>
        <h2 className="font-semibold mt-2">{harga}</h2>
        <div className="flex mt-3 justify-center">
          <a
            href={generateWaLink(name)}
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
