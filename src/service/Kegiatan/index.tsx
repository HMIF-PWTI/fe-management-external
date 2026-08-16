import { database } from "@/config/firebase";
import { Activity } from "@/utils/interface";
import { get, ref } from "firebase/database";

const normalizeActivity = (
  firebaseKey: string,
  value: unknown,
): Activity | null => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    console.warn(`[Firebase] Record /kegiatans/${firebaseKey} tidak valid.`);

    return null;
  }

  const item = value as Record<string, unknown>;
  const id = Number(item.id ?? firebaseKey);

  if (!Number.isFinite(id)) {
    console.warn(`[Firebase] ID /kegiatans/${firebaseKey} tidak valid.`);

    return null;
  }

  return {
    id,
    nama: typeof item.nama === "string" ? item.nama : "",
    tanggal: typeof item.tanggal === "string" ? item.tanggal : "",
    deskripsi: typeof item.deskripsi === "string" ? item.deskripsi : null,
    lokasi: typeof item.lokasi === "string" ? item.lokasi : null,
    gambar: typeof item.gambar === "string" ? item.gambar : null,
    is_absen_active: item.is_absen_active === true,
    is_web_active: item.is_web_active === true,
  };
};

export const getActivity = async (): Promise<Activity[]> => {
  try {
    console.log(
      "[Firebase] databaseURL:",
      import.meta.env.VITE_FIREBASE_DATABASE_URL,
    );
    console.log("[Firebase] reading path: /kegiatans");

    const snapshot = await get(ref(database, "kegiatans"));

    console.log("[Firebase] snapshot exists:", snapshot.exists());

    if (!snapshot.exists()) {
      return [];
    }

    const rawData: unknown = snapshot.val();

    console.log("[Firebase] raw kegiatan:", rawData);

    if (
      typeof rawData !== "object" ||
      rawData === null ||
      Array.isArray(rawData)
    ) {
      throw new Error("[Firebase] Format /kegiatans bukan object yang valid.");
    }

    const activities = Object.entries(rawData)
      .map(([firebaseKey, value]) => normalizeActivity(firebaseKey, value))
      .filter((activity): activity is Activity => activity !== null)
      .filter((activity) => activity.is_web_active === true);

    return [...activities].sort((first, second) => {
      const firstDate = new Date(first.tanggal).getTime();
      const secondDate = new Date(second.tanggal).getTime();

      if (Number.isNaN(firstDate)) return 1;
      if (Number.isNaN(secondDate)) return -1;

      return firstDate - secondDate;
    });
  } catch (error) {
    console.error("[Firebase] gagal membaca /kegiatans:", error);

    if (error instanceof Error) {
      console.error("[Firebase] error message:", error.message);
    }

    throw error;
  }
};
