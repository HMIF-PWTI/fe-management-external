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
        // Handle error, misalnya dengan menampilkan pesan ke pengguna
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-6 sm:px-12 lg:px-36 py-10">
      <div className="bg-white p-5 rounded-lg border-2">
        <div className="flex justify-end mb-4">
          <div className="w-full max-w-sm">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <MarketCard
                key={index}
                image={data.gambar}
                nama_produk={data.nama_produk}
                harga={FormatRupiah(data.harga)}
              />
            ))
          ) : (
            <p className="sm:col-span-2 md:col-span-3 text-center text-gray-500 italic">
              Produk tidak ditemukan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
