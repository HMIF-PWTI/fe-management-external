import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
export const API_URL = rawApiUrl.replace(/\/$/, "");

export interface LkmmRegistrationData {
  nomor_registrasi?: string;
  nama_lengkap: string;
  nim: string;
  angkatan: string;
  kelas: string;
  email: string;
  status: string;
}

export interface LkmmResponse {
  success: boolean;
  is_update?: boolean;
  message: string;
  nomor_registrasi?: string;
  data?: LkmmRegistrationData;
  errors?: Record<string, string[]>;
}

export interface LkmmStatusData {
  nomor_registrasi: string;
  nama_lengkap: string;
  nim: string;
  angkatan: string;
  kelas: string;
  status: "pending" | "diterima" | "ditolak" | string;
  catatan?: string | null;
  created_at?: string | null;
}

export interface LkmmStatusResponse {
  success: boolean;
  message?: string;
  data?: LkmmStatusData;
}

/**
 * Kirim formulir pendaftaran dan berkas LKMM (maksimal 10MB per file)
 */
export const submitLkmmPendaftaran = async (payload: FormData) => {
  return await axios.post<LkmmResponse>(`${API_URL}/api/lkmm/daftar`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Cek status pendaftaran LKMM berdasarkan Nomor Registrasi atau NIM
 */
export const checkLkmmStatus = async (identifier: string) => {
  return await axios.get<LkmmStatusResponse>(`${API_URL}/api/lkmm/status`, {
    params: {
      keyword: identifier.trim(),
    },
  });
};

