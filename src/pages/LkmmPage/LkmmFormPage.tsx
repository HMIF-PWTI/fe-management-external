import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiUploadCloud,
  FiFileText,
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiAward,
  FiAlertCircle,
  FiSend,
  FiTrash2,
  FiInfo,
  FiDownload,
  FiCopy,
} from "react-icons/fi";
import Swal from "sweetalert2";

import keren from "@/assets/keren2.png";
import gerigi from "@/assets/gerigi.png";
import { submitLkmmPendaftaran } from "@/service/Lkmm";

interface UploadedFiles {
  [key: string]: File | null;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const documentList = [
  {
    id: "formulir",
    label: "Formulir Pendaftaran LKMM",
    desc: "Format PDF/DOCX yang telah diisi lengkap dengan foto dan data diri.",
    required: true,
  },
  {
    id: "pernyataan",
    label: "Surat Pernyataan Calon Pendaftar",
    desc: "Surat komitmen yang telah ditandatangani bermaterai/resmi.",
    required: true,
  },
  {
    id: "izinOrtu",
    label: "Surat Izin Orang Tua / Wali",
    desc: "Surat persetujuan resmi yang telah ditandatangani orang tua/wali.",
    required: true,
  },
  {
    id: "cv",
    label: "Curriculum Vitae (CV)",
    desc: "CV terbaru calon pendaftar.",
    required: true,
  },
  {
    id: "suratAktif",
    label: "Surat Keterangan Aktif Mahasiswa",
    desc: "Surat keterangan resmi dari BAAK UNIKOM.",
    required: true,
  },
  {
    id: "kulber",
    label: "Sertifikat Kuliah Bersama (Kulber)",
    desc: "Sertifikat Kulber asli atau Surat Keterangan Sementara dari HMIF.",
    required: true,
  },
  {
    id: "transkrip",
    label: "Transkrip Nilai Akademik",
    desc: "Transkrip dari dashboard mahasiswa UNIKOM (Semester 1-2 / 1-4, IPK min 2.75).",
    required: true,
  },
];

const DRAFT_STORAGE_KEY = "hmif_lkmm_form_draft";

interface LkmmFormData {
  namaLengkap: string;
  nim: string;
  angkatan: string;
  kelas: string;
  ipk: string;
  noWa: string;
  email: string;
}

const defaultFormData: LkmmFormData = {
  namaLengkap: "",
  nim: "",
  angkatan: "2025",
  kelas: "",
  ipk: "",
  noWa: "",
  email: "",
};

const LkmmFormPage: React.FC = () => {
  const navigate = useNavigate();

  // Form states - pulihkan otomatis dari localStorage jika ada draft tersimpan
  const [formData, setFormData] = useState<LkmmFormData>(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        return { ...defaultFormData, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return defaultFormData;
  });

  // Simpan otomatis ke localStorage setiap kali user mengetik
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const [files, setFiles] = useState<UploadedFiles>({
    formulir: null,
    pernyataan: null,
    izinOrtu: null,
    cv: null,
    suratAktif: null,
    kulber: null,
    transkrip: null,
  });

  const [agreement, setAgreement] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cek apakah ada data yang sudah terisi
  const hasDraft = Boolean(
    formData.namaLengkap ||
    formData.nim ||
    formData.kelas ||
    formData.ipk ||
    formData.noWa ||
    formData.email
  );

  // Reset form / hapus draft
  const handleResetForm = () => {
    Swal.fire({
      title: "Kosongkan Formulir?",
      text: "Seluruh data yang telah Anda ketik akan dihapus dan direset.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#102D3F",
      confirmButtonText: "Ya, Kosongkan",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
        setFormData(defaultFormData);
        setAgreement(false);
        Swal.fire({
          icon: "success",
          title: "Formulir Dikosongkan",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  // Handle text inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Format file size
  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  // Handle file uploads with 10MB limit enforcement
  const handleFileChange = (id: string, file: File | null) => {
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        Swal.fire({
          icon: "error",
          title: "Ukuran File Terlalu Besar",
          html: `
            <p class="text-sm text-gray-600">Batas maksimal setiap berkas adalah <strong>10 MB</strong>.</p>
            <p class="text-xs text-red-500 mt-2">Ukuran file yang dipilih: <strong>${formatSize(file.size)}</strong>.</p>
            <p class="text-xs text-gray-500 mt-1">Harap kompres dokumen Anda atau pilih file lain sebelum mengunggah.</p>
          `,
          confirmButtonColor: "#102D3F",
        });
        return;
      }
    }
    setFiles((prev) => ({ ...prev, [id]: file }));
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi data diri
    if (
      !formData.namaLengkap.trim() ||
      !formData.nim.trim() ||
      !formData.kelas.trim() ||
      !formData.ipk.trim() ||
      !formData.noWa.trim() ||
      !formData.email.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Data Belum Lengkap",
        text: "Harap lengkapi semua data identitas diri calon peserta terlebih dahulu.",
        confirmButtonColor: "#102D3F",
      });
      return;
    }

    // Validasi IPK minimal 2.75
    const ipkNumber = parseFloat(formData.ipk.replace(",", "."));
    if (isNaN(ipkNumber) || ipkNumber < 2.75 || ipkNumber > 4.0) {
      Swal.fire({
        icon: "warning",
        title: "Standar IPK Tidak Memenuhi",
        text: "Persyaratan LKMM mewajibkan nilai IPK berjalan minimal 2.75 dan maksimal 4.00.",
        confirmButtonColor: "#102D3F",
      });
      return;
    }

    // Validasi berkas upload wajib
    const missingDocs = documentList.filter(
      (doc) => doc.required && !files[doc.id]
    );

    if (missingDocs.length > 0) {
      Swal.fire({
        icon: "warning",
        title: "Dokumen Belum Lengkap",
        html: `
          <p class="text-sm text-gray-600 mb-2">Terdapat <strong>${missingDocs.length} dokumen wajib</strong> yang belum Anda unggah:</p>
          <ul class="text-left text-xs text-red-600 list-disc list-inside space-y-1 mb-2">
            ${missingDocs.map((d) => `<li>${d.label}</li>`).join("")}
          </ul>
          <p class="text-xs text-gray-500">Pastikan seluruh 7 dokumen persyaratan telah diunggah (maksimal 10 MB per berkas).</p>
        `,
        confirmButtonColor: "#102D3F",
      });
      return;
    }

    // Validasi ukuran semua berkas sekali lagi (maks 10MB)
    const oversizedDocs = Object.entries(files).filter(
      ([_, f]) => f && f.size > MAX_FILE_SIZE
    );
    if (oversizedDocs.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Ukuran File Melebihi 10 MB",
        text: "Terdapat berkas yang melebihi batas ukuran maksimal 10 MB. Silakan kompres dokumen terlebih dahulu.",
        confirmButtonColor: "#102D3F",
      });
      return;
    }

    // Validasi pernyataan
    if (!agreement) {
      Swal.fire({
        icon: "warning",
        title: "Persetujuan Wajib",
        text: "Harap centang persetujuan keabsahan data sebelum mengirim berkas.",
        confirmButtonColor: "#102D3F",
      });
      return;
    }

    // Konfirmasi Kirim
    Swal.fire({
      title: "Konfirmasi Pengumpulan Berkas",
      html: `
        <div class="text-sm text-gray-600 text-left space-y-2">
          <p>Pastikan data identitas dan seluruh berkas yang Anda kirimkan sudah benar:</p>
          <div class="bg-slate-50 p-3 rounded-xl border text-xs space-y-1">
            <p><strong>Nama:</strong> ${formData.namaLengkap}</p>
            <p><strong>NIM:</strong> ${formData.nim}</p>
            <p><strong>Angkatan:</strong> ${formData.angkatan}</p>
            <p><strong>Kelas:</strong> ${formData.kelas}</p>
            <p><strong>IPK:</strong> ${formData.ipk}</p>
            <p><strong>Total Berkas:</strong> 7 Dokumen Lengkap (&le; 10 MB)</p>
          </div>
          <p class="text-xs text-primary2 font-semibold">Kirim berkas pendaftaran Anda ke sistem sekarang?</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#102D3F",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Ya, Kirim Sekarang!",
      cancelButtonText: "Periksa Lagi",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsSubmitting(true);

        try {
          // Build FormData untuk upload multipart ke API management internal
          const payload = new FormData();
          payload.append("nama_lengkap", formData.namaLengkap.trim());
          payload.append("nim", formData.nim.trim());
          payload.append("angkatan", formData.angkatan);
          payload.append("kelas", formData.kelas.trim());
          payload.append("ipk", formData.ipk.replace(",", "."));
          payload.append("no_wa", formData.noWa.trim());
          payload.append("email", formData.email.trim());

          if (files["formulir"]) payload.append("file_formulir", files["formulir"]);
          if (files["pernyataan"]) payload.append("file_pernyataan", files["pernyataan"]);
          if (files["izinOrtu"]) payload.append("file_izin_ortu", files["izinOrtu"]);
          if (files["cv"]) payload.append("file_cv", files["cv"]);
          if (files["suratAktif"]) payload.append("file_surat_aktif", files["suratAktif"]);
          if (files["kulber"]) payload.append("file_kulber", files["kulber"]);
          if (files["transkrip"]) payload.append("file_transkrip", files["transkrip"]);

          const res = await submitLkmmPendaftaran(payload);
          setIsSubmitting(false);

          // Hapus draf dari localStorage setelah berhasil dikirim
          try {
            localStorage.removeItem(DRAFT_STORAGE_KEY);
          } catch {
            // ignore
          }

          const regNumber = res.data?.nomor_registrasi || "";

          Swal.fire({
            icon: "success",
            title: "Pengumpulan Berkas Berhasil!",
            html: `
              <div class="text-center space-y-3">
                <p class="text-sm text-gray-700">Terima kasih <strong>${formData.namaLengkap}</strong>, berkas pendaftaran LKMM Anda telah tersimpan di sistem HMIF.</p>
                <div class="bg-primary2/5 border-2 border-primary2/20 p-4 rounded-2xl">
                  <p class="text-xs text-gray-500 font-medium">Nomor Registrasi Anda:</p>
                  <p class="text-xl font-black tracking-wider text-primary2 mt-1 select-all">${regNumber}</p>
                </div>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Harap catat atau tangkap layar nomor registrasi ini. Anda dapat menggunakannya untuk mengecek status verifikasi di Halaman LKMM.
                </p>
              </div>
            `,
            confirmButtonColor: "#102D3F",
            confirmButtonText: "Selesai & Kembali ke LKMM",
          }).then(() => {
            navigate("/lkmm");
          });
        } catch (err: any) {
          setIsSubmitting(false);
          const errData = err?.response?.data;
          const errorMsg =
            errData?.message ??
            "Terjadi kesalahan saat mengirim berkas. Pastikan server terhubung dan coba lagi.";

          const errDetails = errData?.errors
            ? Object.values(errData.errors as Record<string, string[]>)
              .flat()
              .join("<br>")
            : "";

          Swal.fire({
            icon: "error",
            title: "Pengiriman Gagal",
            html: `
              <p class="text-sm text-gray-700">${errorMsg}</p>
              ${errDetails ? `<div class="text-xs text-left bg-red-50 text-red-600 p-3 rounded-xl border border-red-200 mt-3">${errDetails}</div>` : ""}
            `,
            confirmButtonColor: "#102D3F",
          });
        }
      }
    });
  };

  const uploadedCount = Object.values(files).filter(Boolean).length;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Form Pengumpulan Berkas LKMM | HMIF UNIKOM</title>
        <meta
          name="description"
          content="Formulir online pendaftaran dan pengumpulan berkas LKMM (Latihan Keterampilan Manajemen Mahasiswa) HMIF UNIKOM Kabinet Dhinakara 25/26."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50/60 pb-24">
        {/* HERO / HEADER SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-slate-100 px-6 pt-12 pb-14 sm:px-12 lg:px-24">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary2/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-5 left-5 h-72 w-72 rounded-full bg-primary2/5 blur-3xl pointer-events-none" />

          <img
            src={keren}
            alt=""
            className="hidden lg:block absolute w-60 top-16 -left-[140px] opacity-70 pointer-events-none"
          />
          <img
            src={gerigi}
            alt=""
            className="hidden lg:block absolute w-60 -right-20 top-20 opacity-30 pointer-events-none"
          />

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Back Button */}
            <Link
              to="/lkmm"
              className="inline-flex items-center gap-2 rounded-xl border border-primary2/20 bg-white px-4 py-2 text-xs font-semibold text-primary2 shadow-sm transition hover:bg-primary2 hover:text-white"
            >
              <FiArrowLeft size={16} />
              <span>Kembali ke Informasi LKMM</span>
            </Link>

            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary2/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary2">
                <FiUploadCloud size={14} />
                Portal Pendaftaran Online
              </span>

              <h1 className="mt-4 text-2xl font-extrabold text-black sm:text-4xl md:text-5xl">
                Pengumpulan Berkas LKMM
              </h1>

              <p className="mt-3 text-sm text-gray-700 italic max-w-2xl mx-auto">
                &ldquo;BUILDING WITH INTEGRITY, GROWING IN UNITY&rdquo;
              </p>

              <p className="mt-2 text-xs text-gray-500 max-w-xl mx-auto">
                Lengkapi identitas diri dan unggah seluruh 7 dokumen persyaratan sesuai ketentuan (Maksimal 10 MB per file, format PDF / DOCX / JPG / PNG).
              </p>
            </div>
          </div>
        </section>

        {/* FORM CONTAINER */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-6">
          {/* Progress Bar Card */}
          <div className="rounded-2xl border border-primary2/20 bg-white p-5 shadow-sm mb-6">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="text-gray-600">Kelengkapan Berkas Dokumen:</span>
              <span className="text-primary2 font-bold">
                {uploadedCount} dari {documentList.length} Berkas Terunggah ({Math.round((uploadedCount / documentList.length) * 100)}%)
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full bg-primary2 transition-all duration-300 rounded-full"
                style={{
                  width: `${(uploadedCount / documentList.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-primary2/20 bg-white p-6 sm:p-10 shadow-xl shadow-primary2/5 space-y-8"
          >
            {/* BAGIAN 1: IDENTITAS DIRI */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary2 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-black">
                      Identitas Calon Peserta
                    </h2>
                    <p className="text-xs text-gray-500">
                      Pastikan data diri sesuai dengan data kemahasiswaan UNIKOM.
                    </p>
                  </div>
                </div>

                {hasDraft && (
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-semibold text-blue-700">
                      <FiCheckCircle size={12} />
                      <span>Draf otomatis tersimpan</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs font-semibold text-gray-400 hover:text-red-500 transition underline underline-offset-2"
                    >
                      Kosongkan Form
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Nama Lengkap */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="namaLengkap"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                    />
                  </div>
                </div>

                {/* NIM */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    NIM (Nomor Induk Mahasiswa) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nim"
                    value={formData.nim}
                    onChange={handleInputChange}
                    placeholder="Contoh: 10122001"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                  />
                </div>

                {/* Angkatan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Angkatan <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="angkatan"
                    value={formData.angkatan}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-gray-800 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition bg-white"
                  >
                    <option value="2025">2025 (Mahasiswa Semester 3)</option>
                    <option value="2024">2024 (Mahasiswa Semester 5)</option>
                  </select>
                </div>

                {/* Kelas */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Kelas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="kelas"
                    value={formData.kelas}
                    onChange={handleInputChange}
                    placeholder="Contoh: IF-1 / IF-2"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                  />
                </div>

                {/* IPK Berjalan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    IPK Berjalan (Min. 2.75) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiAward className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="ipk"
                      value={formData.ipk}
                      onChange={handleInputChange}
                      placeholder="Contoh: 3.50"
                      required
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <input
                      type="tel"
                      name="noWa"
                      value={formData.noWa}
                      onChange={handleInputChange}
                      placeholder="Contoh: 08123456789"
                      required
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Alamat Email Aktif <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      required
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BAGIAN 2: UPLOAD DOKUMEN PERSYARATAN */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary2 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-black">
                      Unggah Berkas Persyaratan
                    </h2>
                    <p className="text-xs text-gray-500">
                      Maksimal ukuran tiap file 10 MB (Format PDF, DOC, DOCX, JPG, PNG).
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-semibold text-amber-800">
                  <FiAlertCircle size={13} />
                  <span>Batas Tiap Berkas: Maks. 10 MB</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {documentList.map((doc, idx) => {
                  const currentFile = files[doc.id];

                  return (
                    <div
                      key={doc.id}
                      className={`rounded-2xl border p-4 sm:p-5 transition-all ${currentFile
                        ? "border-green-400 bg-green-50/30"
                        : "border-gray-200 bg-white hover:border-primary2/30"
                        }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary2/10 text-[11px] font-bold text-primary2">
                              {idx + 1}
                            </span>
                            <h3 className="text-sm font-bold text-gray-800">
                              {doc.label} {doc.required && <span className="text-red-500">*</span>}
                            </h3>
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                              Maks. 10 MB
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 ml-8 leading-relaxed">
                            {doc.desc}
                          </p>
                        </div>

                        {/* File Action Box */}
                        <div className="shrink-0 ml-8 sm:ml-0">
                          {currentFile ? (
                            <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-xl border border-green-300 shadow-sm">
                              <FiCheckCircle className="text-green-600 shrink-0" size={16} />
                              <div className="text-left max-w-[160px] truncate">
                                <p className="text-xs font-semibold text-gray-800 truncate" title={currentFile.name}>
                                  {currentFile.name}
                                </p>
                                <p className="text-[10px] text-gray-400">
                                  {formatSize(currentFile.size)}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleFileChange(doc.id, null)}
                                className="text-gray-400 hover:text-red-600 transition ml-1"
                                title="Hapus file"
                              >
                                <FiTrash2 size={15} />
                              </button>
                            </div>
                          ) : (
                            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-dashed border-primary2/30 bg-primary2/5 px-4 py-2 text-xs font-semibold text-primary2 transition hover:bg-primary2 hover:text-white">
                              <FiUploadCloud size={15} />
                              <span>Pilih File</span>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={(e) => {
                                  if (e.target.files && e.target.files[0]) {
                                    handleFileChange(doc.id, e.target.files[0]);
                                  }
                                  e.target.value = "";
                                }}
                                className="hidden"
                              />
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BAGIAN 3: PERNYATAAN & PERSETUJUAN */}
            <div className="border-t border-gray-100 pt-6">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary2 focus:ring-primary2"
                />
                <span className="text-xs text-gray-700 leading-relaxed font-medium">
                  Saya menyatakan dengan sesungguhnya bahwa seluruh data dan berkas yang saya lampirkan adalah benar, sah, dan sesuai dengan ketentuan LKMM HMIF UNIKOM 2026. Saya bersedia menerima konsekuensi dan diskualifikasi apabila data yang diberikan terbukti tidak benar.
                </span>
              </label>
            </div>

            {/* BUTTON SUBMIT */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <Link
                to="/lkmm"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-slate-50"
              >
                <FiArrowLeft size={14} />
                <span>Batal & Kembali</span>
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary2 bg-primary2 px-8 py-3 text-xs font-bold text-white shadow-lg shadow-primary2/20 transition hover:bg-white hover:text-primary2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Mengunggah Berkas ke Server...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={15} />
                    <span>Kirim Berkas Pendaftaran LKMM</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LkmmFormPage;
