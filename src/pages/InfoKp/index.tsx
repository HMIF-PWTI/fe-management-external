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
    <div className="px-36 animate-slide-in py-10 flex flex-col space-y-10 justify-center items-center">
      <h1 className="text-5xl font-semibold italic text-primary2">
        INFO PERUSAHAAN
      </h1>

      <div className="w-full overflow-hidden rounded-xl border border-primary2">
        <table className="w-full border-collapse">
          <thead className="bg-primary2 text-white">
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
              <tr key={kp.id} className="hover:bg-gray-100">
                <td className="border text-center border-primary2 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border text-center border-primary2 px-4 py-2">{kp.nama}</td>
                <td className="border text-center border-primary2 px-4 py-2">
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
