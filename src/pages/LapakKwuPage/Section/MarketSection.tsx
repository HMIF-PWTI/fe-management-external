import { useEffect, useState } from "react";
import MarketCard from "@/components/MarketCard";
import SearchBar from "@/components/SearchBar";
import { FormatRupiah } from "@/utils/FormatRupiah";
import { getLapakKwu, type LapakKwuData } from "@/service/LapakKwu";

const MarketSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<LapakKwuData[]>([]);
  const [loading, setLoading] = useState(true);

  const filteredData = data.filter((item) =>
    item.nama_produk.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLapakKwu();

        console.log("Response Lapak KWU:", response);

        setData(response.data ?? []);
      } catch (error) {
        console.error("Failed to fetch Lapak KWU:", error);
        setData([]);
      } finally {
        setLoading(false);
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

        {loading ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-slate-50">
            <p className="text-center text-sm italic text-gray-500">
              Memuat produk...
            </p>
          </div>
        ) : filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="group rounded-[28px] border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <MarketCard
                  image={item.gambar ?? ""}
                  nama_produk={item.nama_produk}
                  harga={FormatRupiah(item.harga)}
                  link={item.link ?? ""}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-primary2/20 bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary2/10 shadow-md animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </div>

              <span className="mb-3 rounded-full bg-primary2/10 px-4 py-1 text-xs font-semibold text-primary2 animate-pulse">
                Oops, belum ada hasil
              </span>

              <h3 className="text-2xl font-extrabold text-primary2">
                {searchQuery.trim()
                  ? "Produk yang kamu cari belum ditemukan"
                  : "Belum ada produk yang tersedia"}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                {searchQuery.trim()
                  ? "Coba gunakan kata kunci lain atau periksa kembali nama produk yang ingin kamu cari."
                  : "Saat ini produk di Lapak KWU belum ditampilkan. Silakan cek kembali nanti untuk melihat merchandise terbaru dari HMIF UNIKOM."}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1">
                  Merchandise HMIF
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1">
                  Produk Mahasiswa
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1">
                  Coming Soon
                </span>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default MarketSection;