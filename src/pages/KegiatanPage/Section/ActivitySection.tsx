import { getActivity } from "@/service/Kegiatan";
import { Activity } from "@/utils/interface";
import { useEffect, useState } from "react";

const ActivitySection = () => {
  const [activityData, setActivityData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getActivity();

      const data =
        response.data?.payload ??
        response.data?.data ??
        response.data ??
        [];

      setActivityData(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Cannot fetch data Kegiatan:", error);
      setActivityData([]);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  const formatTanggal = (tanggal: string) => {
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-200 border-t-cyan-500 animate-spin" />

          <p className="text-gray-500 text-sm">
            Memuat data kegiatan...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 min-h-[320px]">
      {activityData.length > 0 && (
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400 -translate-x-1/2" />
      )}

      {activityData.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-cyan-200 animate-ping opacity-40" />

            <div className="relative w-24 h-24 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center shadow-sm animate-bounce">
              <span className="text-4xl">📅</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Belum Ada Kegiatan
          </h2>

          <p className="max-w-md text-sm lg:text-base text-gray-500 leading-relaxed">
            Saat ini belum ada kegiatan HMIF yang ditampilkan. Silakan cek
            kembali nanti untuk melihat informasi kegiatan terbaru.
          </p>

          <div className="mt-8 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-300" />
          </div>
        </div>
      ) : (
        <div className="space-y-14">
          {activityData.map((item, index) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-cyan-400 items-center justify-center text-sm font-bold text-cyan-600 z-10">
                {index + 1}
              </div>

              <div
                className={`${
                  index % 2 === 0
                    ? "lg:pr-16"
                    : "lg:pl-16 lg:col-start-2"
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                  {item.gambar && (
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-48 object-cover rounded-lg mb-5"
                    />
                  )}

                  <p className="text-xs font-semibold text-gray-500 mb-3">
                    Nama Kegiatan
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {item.nama}
                  </h2>

                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-800">
                        Tanggal:
                      </span>{" "}
                      {formatTanggal(item.tanggal)}
                    </p>

                    {item.lokasi && (
                      <p>
                        <span className="font-semibold text-gray-800">
                          Lokasi:
                        </span>{" "}
                        {item.lokasi}
                      </p>
                    )}

                    <p className="leading-relaxed">
                      <span className="font-semibold text-gray-800">
                      
                      </span>{" "}
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`hidden lg:block ${
                  index % 2 === 0
                    ? "lg:pl-16"
                    : "lg:pr-16 lg:col-start-1 lg:row-start-1"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  {item.nama}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ActivitySection;