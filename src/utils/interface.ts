export interface Anggota {
    id: number;
    name: string;
    uid: string;
    email: string;
    tanggal_lahir: string;
    alamat: string;
    status_keanggotaan: string;
    id_divisi: string;
    nama_divisi: string;
    id_jabatan: string;
    nama_jabatan: string;
    partisipasi_kegiatan: string;
    created_at: string;
    updated_at: string;
}

export interface ProductData {
    id: number;
    toko_id: number;
    nama_produk: string;
    deskripsi: string;
    harga: string;
    kategori: string;
    gambar: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface KerjaPraktek {
    id: number;
    nama: string;
    alamat: string;
}