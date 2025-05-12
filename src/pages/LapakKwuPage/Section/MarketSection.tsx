import { useState } from "react";
import MarketCard from "@/components/MarketCard";
import SearchBar from "@/components/SearchBar";
import { marketData } from "@/utils/DummyData";
import { FormatRupiah } from "@/utils/FormatRupiah";

const MarketSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = marketData.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-36">
      <div className="bg-white p-5 rounded-lg border-2">
        <div className="flex justify-end mb-4">
          <div className="w-full max-w-sm">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <MarketCard
                key={index}
                image={data.image}
                name={data.nama}
                harga={FormatRupiah(data.harga)}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 italic">
              Produk tidak ditemukan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
