import Loading from "@/components/Loading";
import { getKp } from "@/service/KerjaPraktek";
import { KerjaPraktek } from "@/utils/interface";
import { useEffect, useState } from "react";

const InfoKp = () => {
  const [kpData, setKpData] = useState<KerjaPraktek[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getKp();
        setKpData(response.data.payload);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-6 sm:px-12 lg:px-36 animate-slide-in py-10 flex flex-col space-y-10 justify-center items-center">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold italic text-primary2">
        INFO PERUSAHAAN KERJA PRAKTEK
      </h1>
      <div className="w-full overflow-hidden rounded-xl border border-primary2">
        <table className="w-full border-collapse">
          <thead className="hidden lg:table-header-group bg-primary2 text-white">
            <tr>
              <th className="border border-primary2 px-4 py-2">No</th>
              <th className="border border-primary2 px-4 py-2">
                Nama Perusahaan
              </th>
              <th className="border border-primary2 px-4 py-2">Alamat</th>
            </tr>
          </thead>
          <tbody>
            {kpData.map((kp, index) => (
              <tr
                key={kp.id}
                className="block mb-4 p-4 border-b-4 border-primary2 lg:table-row lg:border-none lg:mb-0 hover:bg-gray-100"
              >
                <td className="hidden lg:table-cell border text-center border-primary2 px-4 py-2">
                  {index + 1}
                </td>
                <td className="block text-right py-2 lg:text-center lg:table-cell lg:border lg:border-primary2 before:content-['Nama_Perusahaan:'] before:float-left before:font-bold before:text-primary2">
                  {kp.nama}
                </td>
                <td className="block text-right py-2 lg:text-center lg:table-cell lg:border lg:border-primary2 before:content-['Alamat:'] before:float-left before:font-bold before:text-primary2">
                  {kp.alamat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoKp;
