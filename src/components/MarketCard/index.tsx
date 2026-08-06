type MarketCardProps = {
  image: string;
  nama_produk: string;
  harga: string;
  link?: string;
};

const MarketCard = ({ image, nama_produk, harga, link }: MarketCardProps) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
      <div className="h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={nama_produk}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            Tidak ada gambar
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-primary2">
          {nama_produk}
        </h3>

        <p className="mt-1 text-base font-semibold text-gray-700">
          {harga}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-primary2 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary2/90"
          >
            Pesan Sekarang
          </a>
        )}
      </div>
    </div>
  );
};

export default MarketCard;