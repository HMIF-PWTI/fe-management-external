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
      <div className="w-full self-start space-y-3">
        <h2 className="text-xl font-medium text-primary2 sm:text-2xl">
          Tahapan Prosedur Kerja Praktek
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            Mengunjungi Perusahaan yang akan dilamar dan menanyakan persyaratan
            untuk kerja praktek
          </li>
          <li>Program Studi hanya menyediakan surat pengantar kerja praktek</li>
          <li>
            Untuk persyaratan selain surat pengantar kerja praktek seperti CV,
            Transkrip Nilai dll. dipersiapkan oleh mahasiswa secara mandiri
          </li>
          <li>
            Untuk Transkrip Nilai bisa di akses di website dashboard unikom yang
            bisa di akses pada link berikut:{" "}
            <a
              href="https://mahasiswa.unikom.ac.id/"
              target="_blank"
              className="italic underline text-blue-500 hover:text-blue-700"
            >
              Tekan Disini
            </a>
          </li>
          <li>
            Setelah Persyaratan terpenuhi, mahasiswa mengirimkan persyaratan ke
            perusahaan
          </li>
          <li>
            Setelah menerima surat balasan dari perusahaan, mahasiswa harus
            mengkonfirmasi ke email:{" "}
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=roby.irawan@email.unikom.ac.id"
              target="_blank"
              className="font-medium italic underline text-blue-500 hover:text-blue-700"
            >
              roby.irawan@email.unikom.ac.id
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full overflow-hidden rounded-xl border border-primary2">
        <table className="w-full border-collapse">
          <thead className="hidden lg:table-header-group bg-primary2 text-white">
            <tr>
              <th className="border border-primary2 px-4 py-2">No</th>
              <th className="border border-primary2 px-4 py-2">
                Nama Perusahaan
              </th>
              <th className="border border-primary2 px-4 py-2">Kota</th>
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
                <td className="block text-right py-2 lg:text-center lg:table-cell lg:border lg:border-primary2 before:content-['Nama_Perusahaan:'] before:float-left before:font-bold before:text-primary2 lg:before:content-['']">
                  {kp.nama}
                </td>
                <td className="block text-right py-2 lg:text-center lg:table-cell lg:border lg:border-primary2 before:content-['Kota:'] before:float-left before:font-bold before:text-primary2 lg:before:content-['']">
                  {kp.kota}
                </td>
                <td className="block text-right py-2 lg:text-center lg:table-cell lg:border lg:border-primary2 before:content-['Alamat:'] before:float-left before:font-bold before:text-primary2 lg:before:content-['']">
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
