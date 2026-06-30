import { Helmet } from "react-helmet-async";
import Loading from "@/components/Loading";
import { getKp } from "@/service/KerjaPraktek";
import { KerjaPraktek } from "@/utils/interface";
import { useEffect, useState } from "react";

const InfoKp = () => {
  const [kpData, setKpData] = useState<KerjaPraktek[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKp();

        console.log("Response KP:", response);

        const result = response.data?.payload ?? response.data ?? [];

        setKpData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Failed to fetch KP:", error);
        setKpData([]);
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
    <>
      <Helmet prioritizeSeoTags>
        <title>Info KP | HMIF UNIKOM</title>

        <meta
          name="description"
          content="Halaman Info KP HMIF UNIKOM berisi informasi prosedur kerja praktek dan daftar perusahaan yang dapat dijadikan referensi oleh mahasiswa Teknik Informatika UNIKOM."
        />

        <meta
          name="keywords"
          content="Info KP, Kerja Praktek, HMIF UNIKOM, Teknik Informatika UNIKOM, Perusahaan Kerja Praktek"
        />

        <meta property="og:title" content="Info KP | HMIF UNIKOM" />

        <meta
          property="og:description"
          content="Informasi prosedur kerja praktek dan daftar perusahaan referensi untuk mahasiswa Teknik Informatika UNIKOM."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col items-center justify-center space-y-10 px-6 py-10 animate-slide-in sm:px-12 lg:px-36">
        <h1 className="text-center text-3xl font-semibold italic text-primary2 lg:text-5xl">
          INFO PERUSAHAAN KERJA PRAKTEK
        </h1>

        <div className="w-full self-start space-y-3">
          <h2 className="text-xl font-medium text-primary2 sm:text-2xl">
            Tahapan Prosedur Kerja Praktek
          </h2>

          <ul className="list-inside list-disc space-y-2 text-gray-800">
            <li>
              Mengunjungi perusahaan yang akan dilamar dan menanyakan
              persyaratan untuk kerja praktek.
            </li>

            <li>
              Program Studi hanya menyediakan surat pengantar kerja praktek.
            </li>

            <li>
              Untuk persyaratan selain surat pengantar kerja praktek seperti CV,
              transkrip nilai, dan lainnya dipersiapkan oleh mahasiswa secara
              mandiri.
            </li>

            <li>
              Untuk transkrip nilai bisa diakses melalui website dashboard
              UNIKOM pada link berikut:{" "}
              <a
                href="https://mahasiswa.unikom.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-blue-500 underline hover:text-blue-700"
              >
                Tekan di sini
              </a>
            </li>

            <li>
              Setelah persyaratan terpenuhi, mahasiswa mengirimkan persyaratan
              ke perusahaan.
            </li>

            <li>
              Setelah menerima surat balasan dari perusahaan, mahasiswa harus
              mengkonfirmasi ke email:{" "}
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=roby.irawan@email.unikom.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium italic text-blue-500 underline hover:text-blue-700"
              >
                roby.irawan@email.unikom.ac.id
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-primary2">
          <table className="w-full border-collapse">
            <thead className="hidden bg-primary2 text-white lg:table-header-group">
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
              {kpData.length > 0 ? (
                kpData.map((kp, index) => (
                  <tr
                    key={kp.id}
                    className="mb-4 block border-b-4 border-primary2 p-4 hover:bg-gray-100 lg:mb-0 lg:table-row lg:border-none"
                  >
                    <td className="hidden border border-primary2 px-4 py-2 text-center lg:table-cell">
                      {index + 1}
                    </td>

                    <td className="block py-2 text-right before:float-left before:font-bold before:text-primary2 before:content-['Nama_Perusahaan:'] lg:table-cell lg:border lg:border-primary2 lg:text-center lg:before:content-['']">
                      {kp.nama}
                    </td>

                    <td className="block py-2 text-right before:float-left before:font-bold before:text-primary2 before:content-['Kota:'] lg:table-cell lg:border lg:border-primary2 lg:text-center lg:before:content-['']">
                      {kp.kota}
                    </td>

                    <td className="block py-2 text-right before:float-left before:font-bold before:text-primary2 before:content-['Alamat:'] lg:table-cell lg:border lg:border-primary2 lg:text-center lg:before:content-['']">
                      {kp.alamat}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-10 text-center text-sm italic text-gray-500"
                  >
                    Data perusahaan kerja praktek belum tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InfoKp;