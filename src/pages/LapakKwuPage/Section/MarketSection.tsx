import { useEffect, useState } from "react";
import MarketCard from "@/components/MarketCard";
import SearchBar from "@/components/SearchBar";
import { FormatRupiah } from "@/utils/FormatRupiah";
import { ProductData } from "@/utils/interface";
import { getProduct } from "@/service/Product";

const MarketSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<ProductData[]>([]);

  const filteredData = data.filter((item) =>
    item.nama_produk.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct();
        setData(response.data.payload);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-6 pb-20 sm:px-12 lg:px-36">
      <div className="rounded-[32px] border border-primary2/10 bg-white/80 p-5 shadow-2xl shadow-primary2/10 backdrop-blur-md sm:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-primary2">
              Produk Tersedia
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Pilih produk yang kamu suka dan lakukan pemesanan.
            </p>
          </div>

          <div className="w-full max-w-sm rounded-2xl bg-white shadow-sm">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((data, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <MarketCard
                  image={data.gambar}
                  nama_produk={data.nama_produk}
                  harga={FormatRupiah(data.harga)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-slate-50">
            <p className="text-center text-sm italic text-gray-500">
              Produk tidak ditemukan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketSection;