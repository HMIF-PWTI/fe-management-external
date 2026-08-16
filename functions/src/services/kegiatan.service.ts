import axios from "axios";

export interface KegiatanResponse {
  success: boolean;
  message: string;
  payload: unknown[];
}

export const fetchKegiatans = async (laravelApiUrl: string) => {
  return axios.get<KegiatanResponse>(`${laravelApiUrl}/api/v1/kegiatans`, {
    timeout: 8_000,
    validateStatus: () => true,
  });
};
