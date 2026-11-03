import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiDownload,
  FiAlertCircle,
  FiMapPin,
  FiExternalLink,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiHelpCircle,
  FiCheck,
  FiChevronDown,
  FiArrowRight,
  FiLayers,
  FiPrinter,
  FiCalendar,
  FiGlobe,
  FiUploadCloud,
  FiLock,
  FiUnlock,
  FiCheckCircle,
  FiSearch,
  FiX,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

import keren from "@/assets/keren2.png";
import gerigi from "@/assets/gerigi.png";
import { checkLkmmStatus, LkmmStatusData } from "@/service/Lkmm";

interface RequirementItem {
  id: number;
  title: string;
  desc: string;
  badge?: string;
  subItems?: string[];
  link?: {
    text: string;
    url: string;
  };
}

const requirementsData: RequirementItem[] = [
  {
    id: 1,
    title: "Formulir Pendaftaran LKMM",
    desc: "Mengisi formulir resmi pendaftaran calon peserta LKMM yang disediakan oleh panitia.",
    badge: "Wajib",
  },
  {
    id: 2,
    title: "Surat Pernyataan Calon Pendaftar",
    desc: "Surat pernyataan komitmen kesediaan mematuhi aturan dan tata tertib selama kegiatan LKMM berlangsung.",
    badge: "Wajib",
  },
  {
    id: 3,
    title: "Surat Izin Orang Tua / Wali",
    desc: "Surat persetujuan resmi dan bertandatangan dari orang tua atau wali mahasiswa untuk mengikuti LKMM.",
    badge: "Wajib",
  },
  {
    id: 4,
    title: "Curriculum Vitae (CV)",
    desc: "Daftar riwayat hidup terbaru yang memuat data diri, pendidikan, pengalaman, dan keahlian.",
    badge: "Wajib",
  },
  {
    id: 5,
    title: "Surat Keterangan Aktif Mahasiswa",
    desc: "Bukti surat keterangan aktif kuliah yang diterbitkan resmi dari BAAK  Universitas Komputer Indonesia",
    badge: "Wajib",
  },
  {
    id: 6,
    title: "Sertifikat Kuliah Bersama (Kulber)",
    desc: "Sertifikat resmi keikutsertaan Kuliah Bersama HMIF. Jika belum memiliki, gunakan surat keterangan sementara.",
    badge: "Wajib*",
  },
  {
    id: 7,
    title: "Minimal IPK 2.75",
    desc: "Memiliki Indeks Prestasi Kumulatif (IPK) berjalan minimal 2.75 pada saat mendaftar.",
    badge: "Syarat Akademik",
  },
  {
    id: 8,
    title: "Transkrip Nilai Akademik",
    desc: "Salinan transkrip nilai resmi yang diperoleh dari website dashboard mahasiswa UNIKOM.",
    badge: "Wajib",
    subItems: [
      "Semester 1 - 2 (Bagi Mahasiswa Angkatan 2025)",
      "Semester 1 - 4 (Bagi Mahasiswa Angkatan 2024)",
    ],
    link: {
      text: "Unduh Transkrip di Dashboard UNIKOM",
      url: "https://mahasiswa.unikom.ac.id/",
    },
  },
  {
    id: 9,
    title: "Wajib Mengikuti Seluruh Rangkaian LKMM",
    desc: "Berkomitmen penuh untuk hadir dan aktif mengikuti seluruh rangkaian kegiatan LKMM dari awal hingga akhir.",
    badge: "Komitmen",
  },
  {
    id: 10,
    title: "Pendaftaran Dikhususkan Untuk Angkatan 24 dan Angkatan 25",
    desc: "Terbuka khusus bagi mahasiswa aktif Program Studi Teknik Informatika UNIKOM Angkatan 2024 dan 2025.",
    badge: "Target Peserta",
  },
];

const downloadableFiles = [
  {
    title: "Formulir Pendaftaran LKMM",
    desc: "Template resmi formulir pendaftaran calon peserta LKMM 2026-2027 HMIF UNIKOM.",
    format: "PDF",
    filename: "Formulir_Pendaftaran_LKMM_HMIF.pdf",
    fileUrl: "/berkas/Formulir_Pendaftaran_LKMM_HMIF.pdf",
  },
  {
    title: "Surat Pernyataan Calon Peserta",
    desc: "Format baku surat pernyataan komitmen kepatuhan tata tertib calon pendaftar LKMM.",
    format: "PDF",
    filename: "Surat_Pernyataan_Calon_Pendaftar_LKMM.pdf",
    fileUrl: "/berkas/Surat_Pernyataan_Calon_Pendaftar_LKMM.pdf",
  },
  {
    title: "Surat Izin Orang Tua / Wali",
    desc: "Format resmi surat persetujuan dari orang tua atau wali mahasiswa untuk mengikuti LKMM.",
    format: "PDF",
    filename: "Surat_Izin_Orang_Tua_LKMM.pdf",
    fileUrl: "/berkas/Surat_Izin_Orang_Tua_LKMM.pdf",
  },
  {
    title: "Surat Keterangan Sementara (Kulber)",
    desc: "Khusus calon pendaftar yang belum memiliki sertifikat Kuliah Bersama (Kulber).",
    format: "PDF",
    filename: "Surat_Keterangan_Sementara_Kulber_HMIF.pdf",
    fileUrl: "/berkas/Surat_Keterangan_Sementara_Kulber_HMIF.pdf",
    highlight: true,
  },
];

const faqItems = [
  {
    question: "Apa itu LKMM?",
    answer:
      "Latihan Keterampilan Manajemen Mahasiswa (LKMM) adalah program pembinaan untuk melatih kemampuan mahasiswa dalam memimpin dan mengelola kegiatan organisasi melalui pembekalan materi serta praktik langsung. Mengusung tema \"Growing with Integrity, Leading in Unity\", LKMM HMIF 2026 bertujuan membentuk anggota yang terampil merancang dan menjalankan kegiatan, berintegritas, bertanggung jawab, serta mampu bekerja sama dalam himpunan.",
  },
  {
    question: "Siapa saja yang boleh mendaftar LKMM kali ini?",
    answer:
      "Pendaftaran kali ini dikhususkan untuk mahasiswa aktif Program Studi Teknik Informatika UNIKOM Angkatan 2024 dan Angkatan 2025 yang memenuhi persyaratan minimal IPK 2.75.",
  },
  {
    question: "Bagaimana jika saya belum memiliki sertifikat Kuliah Bersama (Kulber)?",
    answer:
      "Tenang, calon pendaftar tetap dapat mendaftar dengan menggunakan Surat Keterangan Sementara yang sudah disediakan di website HMIF, dengan syarat wajib mengikuti Kulber pada kesempatan berikutnya.",
  },
  {
    question: "Berapa semester transkrip nilai yang harus saya lampirkan?",
    answer:
      "Untuk Angkatan 2025 melampirkan transkrip Semester 1-2. Sedangkan untuk Angkatan 2024 melampirkan transkrip Semester 1-4. Transkrip dapat diunduh melalui portal mahasiswa.unikom.ac.id.",
  },
];

const LkmmPage = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Status Check Modal State
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [statusResult, setStatusResult] = useState<LkmmStatusData | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      setStatusError("Silakan masukkan Nomor Registrasi atau NIM Anda.");
      return;
    }

    setIsCheckingStatus(true);
    setStatusError(null);
    setStatusResult(null);

    try {
      const res = await checkLkmmStatus(searchKeyword.trim());
      setIsCheckingStatus(false);
      if (res.data?.success && res.data.data) {
        setStatusResult(res.data.data);
      } else {
        setStatusError(res.data?.message || "Data pendaftaran tidak ditemukan.");
      }
    } catch (err: any) {
      setIsCheckingStatus(false);
      const msg =
        err?.response?.data?.message ||
        "Data pendaftaran dengan Nomor Registrasi / NIM tersebut tidak ditemukan.";
      setStatusError(msg);
    }
  };

  const isAllChecked = checkedItems.length === requirementsData.length;

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleAllChecks = () => {
    if (checkedItems.length === requirementsData.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(requirementsData.map((item) => item.id));
    }
  };

  const handleProceedToSubmission = () => {
    if (checkedItems.length < requirementsData.length) {
      Swal.fire({
        icon: "warning",
        title: "CHECKLIST TERLEBIH DAHULU PERSYARATAN!",
        html: `
          <p class="text-sm text-gray-600 mb-2">Anda baru mencentang <strong>${checkedItems.length}</strong> dari <strong>${requirementsData.length}</strong> persyaratan yang wajib disiapkan.</p>
          <p class="text-xs text-primary2 font-semibold">Silakan centang seluruh persyaratan terlebih dahulu untuk membuka akses ke formulir pengumpulan berkas online.</p>
        `,
        confirmButtonColor: "#102D3F",
        confirmButtonText: "Mengerti & Lengkapi",
      });
      return;
    }

    navigate("/lkmm/pengumpulan-berkas");
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = (filename: string, title: string, fileUrl?: string) => {
    Swal.fire({
      icon: "info",
      title: "Download Template Berkas",
      html: `
        <p class="text-sm text-gray-600 mb-2">Anda akan mengunduh dokumen resmi <strong>${title}</strong>.</p>
        <p class="text-xs text-primary2 font-semibold">Silakan unduh, lengkapi datanya, lalu unggah kembali melalui form pendaftaran online.</p>
      `,
      confirmButtonText: "Unduh Dokumen PDF",
      confirmButtonColor: "#102D3F",
      showCancelButton: true,
      cancelButtonText: "Tutup",
    }).then((result) => {
      if (result.isConfirmed) {
        const downloadPath = fileUrl || `/berkas/${filename}`;
        const element = document.createElement("a");
        element.href = downloadPath;
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        Swal.fire({
          icon: "success",
          title: "Berhasil Diunduh!",
          text: `Dokumen ${filename} telah berhasil diunduh.`,
          timer: 2500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleDownloadAll = () => {
    Swal.fire({
      icon: "question",
      title: "Download Paket Seluruh Berkas?",
      text: "Seluruh berkas persyaratan resmi LKMM HMIF (Formulir Pendaftaran, Surat Pernyataan, Surat Izin Orang Tua, dan Surat Sementara) akan diunduh dalam 1 arsip ZIP.",
      confirmButtonColor: "#102D3F",
      confirmButtonText: "Unduh Paket ZIP (Semua)",
      showCancelButton: true,
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const element = document.createElement("a");
        element.href = "/Bundel_Berkas_LKMM_HMIF_2026.zip";
        element.download = "Bundel_Berkas_LKMM_HMIF_2026.zip";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        Swal.fire({
          icon: "success",
          title: "Paket Berkas Diunduh!",
          text: "Seluruh berkas template LKMM berhasil diunduh.",
          timer: 2500,
          showConfirmButton: false,
        });
      }
    });
  };

  const progressPercent = Math.round(
    (checkedItems.length / requirementsData.length) * 100
  );

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>LKMM | HMIF UNIKOM</title>
        <meta
          name="title"
          content="LKMM - Latihan Kepemimpinan Manajemen Mahasiswa | HMIF UNIKOM"
        />
        <meta
          name="description"
          content="Informasi resmi pendaftaran LKMM (Latihan Keterampilan Manajemen Mahasiswa) HMIF UNIKOM. Tema: BUILDING WITH INTEGRITY, GROWING IN UNITY. Persyaratan pendaftaran, alur pendaftaran online di website HMIF UNIKOM, dan download dokumen."
        />
        <meta
          name="keywords"
          content="LKMM, LKMM HMIF, HMIF UNIKOM, Latihan Keterampilan Manajemen Mahasiswa, Pendaftaran LKMM, Mahasiswa Informatika UNIKOM, BUILDING WITH INTEGRITY GROWING IN UNITY"
        />
        <meta property="og:title" content="LKMM | HMIF UNIKOM" />
        <meta
          property="og:description"
          content="Persyaratan pendaftaran, alur pendaftaran online di website HMIF UNIKOM, dan unduh dokumen LKMM HMIF UNIKOM."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* HERO SECTION - HOME THEME WITHOUT PHOTO (CLEAN WHITE/SLATE-100, CENTERED LAYOUT) */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-slate-100 px-6 pt-16 pb-20 sm:px-12 lg:px-24 xl:px-36">
          <div className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-primary2/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-primary2/5 blur-3xl pointer-events-none" />

          <img
            src={keren}
            alt=""
            className="hidden lg:block absolute w-64 top-[85px] -left-[150px] scale-y-[-1] opacity-75 pointer-events-none"
          />
          <img
            src={keren}
            alt=""
            className="hidden lg:block absolute w-64 bottom-10 -left-[150px] opacity-75 pointer-events-none"
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* JUDUL UTAMA - FULL HITAM */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Latihan Kepemimpinan <br className="hidden sm:inline" />
              <span className="text-black">Manajemen Mahasiswa</span>
            </motion.h1>

            {/* TEMA LKMM */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg md:text-xl font-medium text-black italic max-w-2xl mx-auto"
            >
              &ldquo;BUILDING WITH INTEGRITY, GROWING IN UNITY&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 text-base font-semibold text-black sm:text-lg"
            >
              #MajuSolidJaya #Dhinakara25/26
            </motion.p>

            {/* Action Buttons - Home Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/kegiatan"
                className="inline-flex items-center gap-2 rounded-xl border border-primary2 bg-primary2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary2/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary2"
              >
                <FiCalendar size={16} />
                <span>Timeline Kegiatan</span>
              </Link>
              <a
                href="#alur"
                onClick={(e) => scrollToSection(e, "alur")}
                className="rounded-xl border border-primary2/20 bg-white px-6 py-3 text-sm font-semibold text-primary2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary2 hover:bg-slate-50"
              >
                Alur Pendaftaran
              </a>
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, "download")}
                className="inline-flex items-center gap-2 rounded-xl border border-primary2/20 bg-primary2/5 px-6 py-3 text-sm font-semibold text-primary2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary2 hover:text-white"
              >
                <FiDownload size={16} />
                Download Berkas
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsStatusModalOpen(true);
                  setStatusError(null);
                  setStatusResult(null);
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-primary2/30 bg-white px-6 py-3 text-sm font-semibold text-primary2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary2 hover:text-white"
              >
                <FiSearch size={16} />
                <span>Cek Status Pendaftaran</span>
              </button>
            </motion.div>
          </div>

          {/* Quick Highlights & Persyaratan Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 mx-auto mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl"
          >
            <div className="rounded-2xl border border-primary2/20 bg-white p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary2/10 text-primary2">
                  <FiUsers size={22} />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500">Target Peserta</p>
              </div>
              <p className="mt-1 text-sm font-bold text-primary2 sm:text-base">
                Angkatan 24 & 25
              </p>
            </div>

            <div className="rounded-2xl border border-primary2/20 bg-white p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary2/10 text-primary2">
                  <FiTrendingUp size={22} />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500">Standar IPK</p>
              </div>
              <p className="mt-1 text-sm font-bold text-primary2 sm:text-base">
                Minimal 2.75
              </p>
            </div>

            <div className="rounded-2xl border border-primary2/20 bg-white p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary2/10 text-primary2">
                  <FiGlobe size={22} />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500">Metode</p>
              </div>
              <p className="mt-1 text-sm font-bold text-primary2 sm:text-base">
                Pendaftaran Online
              </p>
            </div>

            <div className="rounded-2xl border border-primary2/20 bg-white p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary2/10 text-primary2">
                  <FiUploadCloud size={22} />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500">Pengumpulan</p>
              </div>
              <p className="mt-1 text-sm font-bold text-primary2 sm:text-base">
                Website HMIF UNIKOM
              </p>
            </div>

            {/* Card: Lihat Persyaratan Lainnya */}
            <a
              href="#persyaratan"
              onClick={(e) => scrollToSection(e, "persyaratan")}
              className="col-span-2 sm:col-span-1 group rounded-2xl border-2 border-primary2/25 bg-white p-5 text-center shadow-sm hover:border-primary2 hover:bg-primary2/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary2/10 text-primary2 group-hover:bg-primary2 group-hover:text-white transition">
                  <FiLayers size={22} />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500">10 Dokumen Wajib</p>
              </div>
              <div className="mt-1 flex items-center justify-center gap-1 text-sm font-bold text-primary2 sm:text-base">
                <span>Lihat Persyaratan Lainnya</span>
                <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </section>

        {/* MAIN BODY CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <img
            src={gerigi}
            alt=""
            className="hidden lg:block absolute right-0 top-32 h-80 w-auto object-cover opacity-25 pointer-events-none"
          />
          <img
            src={keren}
            alt=""
            className="hidden lg:block absolute left-0 top-96 h-80 w-auto object-cover opacity-25 pointer-events-none"
          />

          {/* SECTION PERSYARATAN PENDAFTARAN */}
          <section id="persyaratan" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <p className="mb-3 w-fit rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-semibold text-primary2 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <FiLayers size={14} />
                    Dokumen & Kualifikasi
                  </span>
                </p>
                <h2 className="text-3xl font-extrabold text-primary2 lg:text-4xl">
                  Persyaratan Pendaftaran
                </h2>
                <p className="mt-2 text-sm text-gray-700 sm:text-base">
                  Pastikan calon pendaftar memenuhi dan melengkapi seluruh 10
                  persyaratan berikut:
                </p>
              </div>

              {/* Live Checklist Tracker Header Card */}
              <div className="rounded-2xl border border-primary2/20 bg-white p-5 shadow-sm md:w-80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600">
                    Ceklis Persiapan Berkas
                  </span>
                  <span className="text-xs font-bold text-primary2">
                    {checkedItems.length} / {requirementsData.length} Siap
                  </span>
                </div>
                <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-primary2 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <p className="text-[11px] text-gray-500">
                    {isAllChecked
                      ? "✨ Semua berkas sudah siap!"
                      : "Centang setiap item persyaratan."}
                  </p>
                  <button
                    type="button"
                    onClick={handleToggleAllChecks}
                    className="text-[11px] font-bold text-primary2 hover:underline shrink-0"
                  >
                    {isAllChecked ? "Reset" : "Centang Semua"}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Requirements Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {requirementsData.map((item, idx) => {
                const isChecked = checkedItems.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                    onClick={() => toggleCheck(item.id)}
                    className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${isChecked
                      ? "border-primary2 bg-primary2/5 shadow-sm"
                      : "border-primary2/15 bg-white hover:border-primary2/50 hover:shadow-md"
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox Icon */}
                      <button
                        type="button"
                        aria-label={`Tandai ${item.title}`}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition ${isChecked
                          ? "border-primary2 bg-primary2 text-white"
                          : "border-gray-300 bg-slate-50 text-gray-500 group-hover:border-primary2 group-hover:text-primary2"
                          }`}
                      >
                        {isChecked ? (
                          <FiCheck size={18} />
                        ) : (
                          <span className="text-xs font-bold">{item.id}</span>
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3
                            className={`text-base font-bold transition ${isChecked
                              ? "text-primary2 line-through decoration-primary2/50"
                              : "text-primary2"
                              }`}
                          >
                            {item.title}
                          </h3>

                          {item.badge && (
                            <span className="rounded-full bg-primary2/10 px-3 py-1 text-[11px] font-semibold text-primary2">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-1.5 text-xs text-gray-700 sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Special Sub-items (Transkrip Nilai) */}
                        {item.subItems && (
                          <div className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3.5 border border-primary2/10">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-primary2">
                              Ketentuan Semester Transkrip:
                            </p>
                            <ul className="space-y-1.5 text-xs text-gray-700">
                              {item.subItems.map((sub, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="flex items-center gap-2 font-medium"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary2 shrink-0" />
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* External Link button if any */}
                        {item.link && (
                          <div className="mt-3">
                            <a
                              href={item.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary2 hover:underline"
                            >
                              <span>{item.link.text}</span>
                              <FiExternalLink size={13} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTION BANNER: TOMBOL KE HALAMAN PENGUMPULAN BERKAS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mt-10 rounded-3xl border-2 p-6 sm:p-8 transition-all ${
                isAllChecked
                  ? "border-primary2 bg-primary2/5 shadow-xl shadow-primary2/10"
                  : "border-gray-200 bg-slate-50/70"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 ${
                      isAllChecked
                        ? "bg-primary2/10 text-primary2"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isAllChecked ? (
                      <>
                        <FiCheckCircle size={14} className="text-primary2" />
                        <span>Persyaratan Lengkap ({checkedItems.length}/{requirementsData.length})</span>
                      </>
                    ) : (
                      <>
                        <FiLock size={14} />
                        <span>Status: Terkunci ({checkedItems.length}/{requirementsData.length} Tercentang)</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-primary2 sm:text-2xl">
                    {isAllChecked
                      ? "Semua Persyaratan Sudah Siap!"
                      : "Checklist Terlebih Dahulu Persyaratan"}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed">
                    {isAllChecked
                      ? "Luar biasa! Seluruh 10 persyaratan telah Anda siapkan. Silakan klik tombol di samping untuk masuk ke form pengumpulan berkas online."
                      : "Tombol pengumpulan berkas akan terbuka secara otomatis setelah Anda mencentang seluruh 10 persyaratan di atas."}
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={handleProceedToSubmission}
                    className={`w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-sm font-bold shadow-md transition-all duration-300 ${
                      isAllChecked
                        ? "border-2 border-primary2 bg-primary2 text-white shadow-primary2/25 hover:-translate-y-1 hover:bg-white hover:text-primary2 cursor-pointer"
                        : "border-2 border-gray-300 bg-gray-200 text-gray-400 hover:border-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isAllChecked ? (
                      <>
                        <FiUnlock size={18} />
                        <span>Kumpulkan Berkas Sekarang</span>
                        <FiArrowRight size={18} />
                      </>
                    ) : (
                      <>
                        <FiLock size={18} />
                        <span>Kumpulkan Berkas (Terkunci)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION ALUR PENDAFTARAN - SMOOTH SCROLLABLE CARDS (HOME THEME) */}
          <section id="alur" className="mt-24 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="mx-auto mb-3 w-fit rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-semibold text-primary2 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <FiPrinter size={14} />
                  Tahapan Pendaftaran
                </span>
              </p>
              <h2 className="text-3xl font-extrabold text-primary2 lg:text-4xl">
                Alur Pendaftaran LKMM
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-700 sm:text-base">
                Ikuti 2 langkah alur pendaftaran resmi berikut ini untuk
                melakukan pendaftaran:
              </p>
            </motion.div>

            {/* SMOOTH HORIZONTAL SCROLL TRACK / CONNECTED CARDS */}
            <div className="mt-10 relative">
              <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar md:grid md:grid-cols-2">
                {/* ALUR 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center relative flex flex-col justify-between rounded-3xl border border-primary2/20 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary2 font-black text-white text-lg shadow-md shadow-primary2/20">
                        01
                      </span>
                      <span className="rounded-full bg-primary2/10 px-3.5 py-1 text-xs font-bold text-primary2">
                        Tahap Pertama
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-primary2">
                      Mendownload Berkas yang Sudah Disediakan Panitia
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      Calon peserta wajib mendownload berkas resmi melalui website
                      HMIF UNIKOM. Berkas meliputi Formulir Pendaftaran, Surat
                      Pernyataan Calon Pendaftar, Surat Izin Orang Tua,
                      dan surat keterangan sementara jika diperlukan.
                    </p>

                    <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-primary2/10">
                      <p className="text-xs font-bold text-primary2">
                        💡 Petunjuk Panitia:
                      </p>
                      <p className="mt-1 text-xs text-gray-700 leading-relaxed">
                        Unduh berkas di bagian unduhan di bawah, lalu isi setiap
                        formulir secara jelas dan teliti.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <a
                      href="#download"
                      onClick={(e) => scrollToSection(e, "download")}
                      className="inline-flex items-center gap-2 font-bold text-primary2 text-sm hover:underline transition"
                    >
                      <span>Menuju Bagian Download Berkas</span>
                      <FiArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>

                {/* ALUR 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center relative flex flex-col justify-between rounded-3xl border-2 border-primary2 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary2 font-black text-white text-lg shadow-md shadow-primary2/20">
                        02
                      </span>
                      <span className="rounded-full bg-primary2/10 px-3.5 py-1 text-xs font-bold text-primary2">
                        Tahap Kedua & Akhir
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-primary2">
                      Pendaftaran Online di Website HMIF UNIKOM
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      Seluruh berkas persyaratan yang telah diisi lengkap dan
                      ditandatangani dikumpulkan secara online melalui Website HMIF
                      UNIKOM sesuai alur dan batas waktu yang ditentukan.
                    </p>

                    {/* Highlight Ketentuan Online */}
                    <div className="mt-6 rounded-2xl border-2 border-primary2/30 bg-primary2/5 p-5 text-primary2 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary2 text-white shadow-md">
                          <FiGlobe size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-primary2/70">
                            Sistem Pendaftaran
                          </p>
                          <p className="text-base font-extrabold text-primary2">
                            Alur Pendaftaran Online di Website HMIF UNIKOM
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleProceedToSubmission}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary2 bg-primary2 px-5 py-3 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-white hover:text-primary2 cursor-pointer"
                    >
                      <span>Masuk ke Form Pengumpulan Berkas</span>
                      <FiArrowRight size={14} />
                    </button>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Platform: Website HMIF UNIKOM
                    </span>
                    <a
                      href="https://api.whatsapp.com/send/?phone=6281312586190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary2 hover:underline"
                    >
                      <span>Konfirmasi ke Narahubung</span>
                      <FiExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Mobile swipe hint */}
              <p className="mt-2 text-center text-xs text-gray-400 md:hidden flex items-center justify-center gap-1">
                <span>👈 Geser kartu ke samping untuk melihat alur 👉</span>
              </p>
            </div>
          </section>

          {/* NOTE / CATATAN KHUSUS */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-[28px] border-2 border-primary2/20 bg-white p-7 md:p-9 shadow-md shadow-primary2/5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary2 text-white shadow-lg shadow-primary2/20">
                  <FiAlertCircle size={30} />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary2/10 px-3 py-1 text-xs font-bold text-primary2 uppercase tracking-wider">
                    Catatan Penting (Note)
                  </div>
                  <h3 className="mt-2 text-base font-bold text-primary2 sm:text-lg">
                    Ketentuan Sertifikat Kuliah Bersama (Kulber)
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-700 leading-relaxed font-medium">
                    1. Jika tidak ada sertifikat kulber, maka calon pendaftar
                    dapat menggunakan surat keterangan sementara yang tertera di
                    website HMIF dengan syarat di kemudian hari harus mengikuti
                    kulber.
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleDownload(
                      "Surat_Keterangan_Sementara_Kulber_HMIF.pdf",
                      "Surat Keterangan Sementara Kulber",
                      "/berkas/Surat_Keterangan_Sementara_Kulber_HMIF.pdf"
                    )
                  }
                  className="shrink-0 rounded-xl border border-primary2 bg-primary2 px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-white hover:text-primary2"
                >
                  <span className="flex items-center gap-2">
                    <FiDownload size={14} />
                    Unduh Surat Keterangan
                  </span>
                </button>
              </div>
            </div>
          </motion.section>

          {/* SECTION DOWNLOAD BERKAS */}
          <section id="download" className="mt-24 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <p className="mb-3 w-fit rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-semibold text-primary2 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <FiDownload size={14} />
                    Dokumen Persyaratan
                  </span>
                </p>
                <h2 className="text-3xl font-extrabold text-primary2 lg:text-4xl">
                  Download Berkas Pendaftaran
                </h2>
                <p className="mt-2 text-sm text-gray-700 sm:text-base">
                  Unduh template berkas yang disediakan oleh panitia di bawah ini:
                </p>
              </div>

              <button
                onClick={handleDownloadAll}
                className="rounded-xl border border-primary2 bg-primary2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary2/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary2 inline-flex items-center justify-center gap-2"
              >
                <FiDownload size={16} />
                <span>Download Semua Berkas (.zip)</span>
              </button>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {downloadableFiles.map((file, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-2xl border border-primary2/15 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary2 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary2/10 text-primary2">
                        <FiFileText size={22} />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-gray-600">
                        {file.format}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-primary2">
                      {file.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                      {file.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleDownload(file.filename, file.title, file.fileUrl)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary2/20 bg-white px-4 py-2.5 text-xs font-semibold text-primary2 shadow-sm transition hover:bg-primary2 hover:text-white"
                    >
                      <FiDownload size={14} />
                      <span>Unduh Berkas</span>
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Portal Transkrip Nilai Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col justify-between rounded-2xl border border-primary2/20 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-primary2 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary2 text-white">
                      <FiAward size={22} />
                    </div>
                    <span className="rounded-full bg-primary2/10 px-3 py-1 text-[11px] font-semibold text-primary2">
                      Portal UNIKOM
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-primary2">
                    Transkrip Nilai Mahasiswa
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    Unduh transkrip nilai semester berjalan langsung dari
                    dashboard akun mahasiswa UNIKOM resmi.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="https://mahasiswa.unikom.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary2 bg-primary2 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-white hover:text-primary2"
                  >
                    <span>Buka Portal Mahasiswa</span>
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION FAQ */}
          <section className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="mx-auto mb-3 w-fit rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-semibold text-primary2 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <FiHelpCircle size={14} />
                  Frequently Asked Questions
                </span>
              </p>
              <h2 className="text-3xl font-extrabold text-primary2">
                Pertanyaan Seputar LKMM
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-gray-700">
                Informasi ringkas mengenai hal yang sering ditanyakan oleh calon
                peserta LKMM HMIF UNIKOM.
              </p>
            </motion.div>

            <div className="mx-auto mt-10 max-w-3xl space-y-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-primary2/15 bg-white transition hover:border-primary2/40"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-bold text-primary2 hover:bg-slate-50 transition"
                    >
                      <span className="text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <FiChevronDown
                        className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary2" : ""
                          }`}
                        size={20}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-xs sm:text-sm text-gray-700 leading-relaxed bg-slate-50/60">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* HELP & CONTACT CARD - Home Style */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20"
          >
            <div className="rounded-[32px] border border-primary2/30 bg-white/90 p-8 shadow-2xl shadow-primary2/10 backdrop-blur-md md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <p className="mb-2 w-fit mx-auto md:mx-0 rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-semibold text-primary2">
                    Layanan Bantuan & Informasi
                  </p>
                  <h3 className="text-2xl font-extrabold text-primary2 sm:text-3xl">
                    Masih Ada Pertanyaan Mengenai LKMM?
                  </h3>
                  <p className="mt-3 text-sm text-gray-700 max-w-xl leading-relaxed">
                    Silakan hubungi panitia LKMM atau narahubung untuk
                    berkonsultasi mengenai kelengkapan berkas dan alur
                    pendaftaran online di Website HMIF UNIKOM.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281312586190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-primary2 bg-primary2 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary2/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary2"
                  >
                    <FaWhatsapp size={18} />
                    <span>Narahubung 1</span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=6282118417924"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-primary2/20 bg-white px-6 py-3.5 text-sm font-semibold text-primary2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary2 hover:bg-slate-50"
                  >
                    <FaWhatsapp size={18} />
                    <span>Narahubung 2</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* MODAL CEK STATUS PENDAFTARAN */}
      {isStatusModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-primary2/20 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsStatusModalOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-slate-100 hover:text-gray-700 transition"
              title="Tutup"
            >
              <FiX size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary2/10 text-primary2">
                <FiSearch size={20} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">
                  Cek Status Pendaftaran LKMM
                </h3>
                <p className="text-xs text-gray-500">
                  Pantau proses verifikasi berkas LKMM Anda secara real-time.
                </p>
              </div>
            </div>

            {/* Search Form */}
            <form onSubmit={handleCheckStatus} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Nomor Registrasi atau NIM
                </label>
                <div className="relative">
                  <FiFileText className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Contoh: LKMM-2026-10122001-XXXX atau 10122001"
                    className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isCheckingStatus}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-primary2 bg-primary2 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary2/15 transition hover:bg-white hover:text-primary2 disabled:opacity-50"
              >
                {isCheckingStatus ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Mencari Data...</span>
                  </>
                ) : (
                  <>
                    <FiSearch size={14} />
                    <span>Periksa Status</span>
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {statusError && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-600 flex items-start gap-2">
                <FiAlertCircle className="shrink-0 mt-0.5" size={15} />
                <span>{statusError}</span>
              </div>
            )}

            {/* Status Result Card */}
            {statusResult && (
              <div className="mt-5 rounded-2xl border border-gray-200 bg-slate-50/70 p-4 sm:p-5 space-y-4 text-xs">
                {/* Status Badge */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-600">Status Berkas:</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-bold text-[11px] ${
                      statusResult.status === "diterima"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : statusResult.status === "ditolak"
                        ? "bg-red-100 text-red-800 border border-red-300"
                        : "bg-amber-100 text-amber-800 border border-amber-300"
                    }`}
                  >
                    {statusResult.status === "diterima" && <FiCheckCircle size={13} />}
                    {statusResult.status === "ditolak" && <FiAlertCircle size={13} />}
                    {statusResult.status === "pending" && <FiClock size={13} />}
                    <span>
                      {statusResult.status === "diterima"
                        ? "Diterima / Lolos Verifikasi"
                        : statusResult.status === "ditolak"
                        ? "Ditolak / Perlu Perbaikan"
                        : "Menunggu Verifikasi Panitia"}
                    </span>
                  </span>
                </div>

                {/* Candidate Info */}
                <div className="space-y-1.5 text-gray-700">
                  <p><strong>Nama:</strong> {statusResult.nama_lengkap}</p>
                  <p><strong>NIM:</strong> {statusResult.nim}</p>
                  <p><strong>Angkatan / Kelas:</strong> {statusResult.angkatan} / {statusResult.kelas}</p>
                  <p><strong>No. Registrasi:</strong> <span className="font-mono font-semibold text-primary2">{statusResult.nomor_registrasi}</span></p>
                  {statusResult.created_at && (
                    <p className="text-[11px] text-gray-500">
                      <strong>Waktu Pendaftaran:</strong> {statusResult.created_at}
                    </p>
                  )}
                </div>

                {/* Catatan Panitia */}
                <div className="rounded-xl bg-white border border-gray-200 p-3 text-gray-600 space-y-1">
                  <p className="font-bold text-[11px] text-gray-800">Catatan Panitia LKMM:</p>
                  <p className="text-xs italic leading-relaxed">
                    {statusResult.catatan || (
                      statusResult.status === "pending"
                        ? "Berkas Anda sedang dalam proses peninjauan oleh panitia. Mohon cek berkala."
                        : statusResult.status === "diterima"
                        ? "Selamat! Berkas Anda telah dinyatakan lengkap dan memenuhi syarat LKMM."
                        : "Silakan hubungi narahubung panitia untuk informasi perbaikan berkas."
                    )}
                  </p>
                </div>

                {/* Call to Action based on status */}
                {statusResult.status === "ditolak" && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsStatusModalOpen(false);
                      navigate(`/lkmm/pengumpulan-berkas?nim=${encodeURIComponent(statusResult.nim)}`);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-700 shadow-md"
                  >
                    <span>Kirim Ulang / Perbaiki Berkas</span>
                    <FiArrowRight size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LkmmPage;
