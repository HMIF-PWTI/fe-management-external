export interface LapakKwuData {
  id: number;
  gambar: string | null;
  nama_produk: string;
  harga: number;
  deskripsi: string;
  link: string | null;
  is_active: boolean;
}

interface LapakKwuResponse {
  success: boolean;
  message: string;
  data: LapakKwuData[];
}

const API_URL = import.meta.env.VITE_API_URL;

export const getLapakKwu = async (): Promise<LapakKwuResponse> => {
  const response = await fetch(`${API_URL}/api/lapak-kwu`);

  if (!response.ok) {
    throw new Error("Gagal mengambil data Lapak KWU");
  }

  return response.json();
};