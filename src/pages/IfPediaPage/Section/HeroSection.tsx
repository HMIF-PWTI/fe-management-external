import TextStyled from "@/components/TextStyled";
import gerigi from "@/assets/gerigi.png";

const HeroSection = () => {
  return (
    <div className="px-36">
      <div className="flex justify-center items-center mb-20">
        <img src="https://res.cloudinary.com/dalqxae3w/image/upload/v1747120217/IF-PEDIA_rysj4v.png" alt="" className="w-96" />
      </div>
      <img
        src={gerigi}
        alt="Gerigi"
        className="absolute right-0 top-36 h-96 w-auto object-cover scale-x-[-1]"
      />
      <div className="flex flex-col items-start justify-start space-y-10 text-primary2">
        <TextStyled text={"Latar Belakang"} className="text-center" />
        <div className="space-y-3">
          <p className="text-indent text-justify">
            Dalam era digital yang berkembang pesat, kebutuhan akan informasi
            yang cepat, akurat, dan mudah diakses menjadi sangat penting,
            terutama bagi mahasiswa di lingkungan akademik khususnya di
            lingkungan Universitas Komputer Indonesia (UNIKOM). Pada masalah
            ini, mahasiswa program studi Teknik Informatika di UNIKOM sering
            kali menghadapi tantangan dalam mencari informasi yang berkaitan
            dengan perkuliahan, akademik, layanan mahasiswa, serta berbagai
            kegiatan di kampus. Kendala tersebut tentu dapat menghambat
            kelancaran proses pengembangan diri mahasiswa selama menempuh studi
            Teknik Informatika di UNIKOM.
          </p>
          <p className="text-indent text-justify">
            Sebagai bentuk solusi terhadap permasalahan tersebut, IF-PEDIA pun
            hadir sebagai sebuah e-book yang dirancang khusus untuk memberikan
            panduan lengkap bagi mahasiswa Teknik Informatika UNIKOM. E-Book ini
            mencakup berbagai aspek penting, mulai dari informasi akademik,
            kurikulum, layanan mahasiswa, hingga berbagai kegiatan yang dapat
            menunjang perkembangan mahasiswa di lingkungan kampus.
          </p>
          <p className="text-indent text-justify">
            Dengan adanya IF-PEDIA, mahasiswa dapat memperoleh informasi yang
            dibutuhkan dengan lebih mudah dan terstruktur. Buku ini diharapkan
            dapat menjadi referensi utama bagi mahasiswa dalam memahami
            peraturan akademik, mengakses layanan administrasi, serta
            memanfaatkan berbagai fasilitas yang tersedia di kampus. Selain itu,
            IF-PEDIA juga bertujuan untuk membantu mahasiswa dalam berkomunikasi
            dengan dosen, mendapatkan informasi tentang beasiswa, serta
            mengikuti berbagai kompetisi dan event yang relevan dengan bidang
            studi Teknik Informatika.
          </p>
          <p className="text-indent text-justify">
            Dengan demikian, IF-PEDIA menjadi sebuah inovasi yang mendukung
            mahasiswa dalam menyesuaikan diri dengan lingkungan akademik,
            meningkatkan efektivitas belajar, serta mengoptimalkan peluang
            pengembangan diri selama menempuh pendidikan di UNIKOМ.
          </p>
        </div>
        <TextStyled text="Apa Itu IF-Pedia?" />
        <div>
          <p className="text-indent text-justify">
            IF-PEDIA adalah sebuah e-book yang dirancang khusus untuk mahasiswa
            program studi Teknik Informatika UNIKOM. Buku ini berisi berbagai
            informasi penting mengenai perkuliahan, akademik, layanan mahasiswa,
            serta berbagai kegiatan di kampus. Dengan IF-PEDIA, mahasiswa dapat
            dengan mudah menemukan panduan yang dibutuhkan selama menempuh studi
            di program studi Teknik Informatika UNIKOM.
          </p>
        </div>
        <TextStyled text="Tujuan dan Manfaat IF-Pedia?" />
        <div>
          <p>E-book ini dibuat dengan beberapa tujuan utama yaitu : </p>
          <ul className="list-disc">
            <li className="font-medium">Sebagai Panduan Akademik</li>
          </ul>
          <p>
            Memberikan informasi lengkap tentang kurikulum, mata kuliah wajib
            dan pilihan, serta cara mengambil mata kuliah sesuai aturan
            akademik.
          </p>
          <ul className="list-disc">
            <li className="font-medium">Mempermudah Komunikasi dengan Dosen</li>
          </ul>
          <p>
            Menyediakan informasi mengenai profil dosen, jadwal konsultasi,
            serta tips berkomunikasi dengan dosen secara efektif.
          </p>
          <ul className="list-disc">
            <li className="font-medium">
              Membantu Mahasiswa dalam Pengurusan Administrasi
            </li>
          </ul>
          <p>
            Menyediakan panduan tentang layanan akademik, bimbingan konseling,
            beasiswa, serta tata cara mendapatkan surat magang atau surat
            keterangan lainnya.
          </p>
          <ul className="list-disc">
            <li className="font-medium">
              Menunjang Aktivitas Mahasiswa di Kampus
            </li>
          </ul>
          <p>
            Memberikan informasi tentang fasilitas kampus, serta event dan
            kompetisi yang dapat diikuti mahasiswa.
          </p>
          <p className="text-indent text-justify mt-2">
            Dengan IF-PEDIA, mahasiswa Teknik Informatika UNIKOM dapat lebih
            mudah memahami aturan akademik, memanfaatkan fasilitas kampus, dan
            aktif dalam berbagai kegiatan untuk mengembangkan potensi diri.
          </p>
        </div>
        <TextStyled text="Sekilas Tentang UNIKOM" />
        <div className="space-y-2">
          <p className="text-indent text-justify">
            Universitas Komputer Indonesia (UNIKOM) secara resmi berdiri pada
            hari Selasa, tanggal 8 Agustus 2000 berdasarkan Surat Keputusan
            Menteri Pendidikan Nasional nomor 126/D/0/2000.
          </p>
          <p className="text-indent text-justify">
            Awalnya dimulai pada bulan Juli tahun 1994 ketika didirikan Lembaga
            Pendidikan Komputer Indonesia Jerman, disingkat LPKIG, bertempat di
            jalan Dipati Ukur 102 Bandung. Lembaga ini membuka program
            pendidikan 1 tahun dengan 5 program studi yaitu Ahli Komputer
            Aplikasi Bisnis, Ahli Komputer Keuangan & Perbankan, Ahli Komputer
            Akuntansi & Perpajakan, Ahli Komputer Manajemen & Pemasaran dan
            Sekretaris Eksekutif. Jumlah peserta pendidikan pada tahun pertama
            ini sebanyak 233 siswa.
          </p>
          <p className="text-indent text-justify">
            Pada tahun kedua, 1995, dibuka jenjang pendidikan 3 tahun untuk
            memenuhi animo siswa tahun pertama yang ingin memperdalam ilmunya,
            disamping pemikiran jangka panjang pengembangan institusi. Pada
            tahun ini juga dibuka program studi baru, meliputi: Ahli Komputer
            Teknik Informatika, Ahli Komputer Manajemen Informatika dan
            Sekretaris Eksekutif. Ruang kelas ditambah menjadi 2 buah dan
            laboratorium komputer menjadi 2 buah dengan jumlah siswa sebanyak
            457 orang.
          </p>
          <p className="text-indent text-justify">
            Pada hari Selasa, tanggal 8 Agustus 2000 keluarlah SK MENDIKNAS no.
            126/D/O/2000 atas Universitas Komputer Indonesia yang disingkat
            dengan nama UNIKOM. Pada SK tersebut sekaligus diijinkan dibukanya
            11 program studi baru: Teknik Komputer S1, Manajemen Informatika S1,
            Teknik Industri S1, Teknik Arsitektur S1, Perencanaan Wilayah dan
            Kota S1, Ilmu Hukum S1, Ilmu Komunikasi S1, Ilmu Pemerintahan S1,
            Desain Interior D3, Desain Komunikasi Visual S1 dan Desain
            Komunikasi Visual D3.
          </p>
        </div>
        <TextStyled text="Visi UNIKOM" />
        <div>
          <p className="text-indent text-justify">
            Menjadi Universitas terkemuka di bidang Teknologi Informasi &
            Komunikasi, berwawasan Global, berjiwa Enterpreneur dan menjadi
            Pusat Unggulan di bidang Ilmu Pengetahuan dan Teknologi yang
            mendukung Pembangunan Nasional berorientasi pada kepentingan
            Masyarakat, Bangsa dan Negara.
          </p>
        </div>
        <TextStyled text="Misi UNIKOM" />
        <div>
          <p className="text-indent text-justify">
            Menyelenggarakan Pendidikan Tinggi Modern berdasarkan Budaya
            Organisasi UNIKOM, PIQIE (Professionalism, Integrity, Quality,
            Information Technology, Excellence), dengan Sistem Pendidikan yang
            Kondusif dan Program-program Studi yang berbasis pada Software
            (Perangkat Lunak), Hardware (Perangkat Keras), Entrepreneurship
            (Kewirausahaan), dengan mengoptimalkan Sumber Daya yang ada
            berdasarkan prinsip Efisiensi, Efektifitas dan Produktifitas.
          </p>
        </div>
        <TextStyled text="Motto UNIKOM" />
        <div>
          <p className="text-indent text-justify">
            UNIKOM memiliki moto yakni, "Quality Is Our Tradition (Kualitas
            adalah Tradisi Kami)" dan Budaya Organisasi: PIQIE (Professionalism,
            Integrity, Quality, Information Technology, Excellence).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
