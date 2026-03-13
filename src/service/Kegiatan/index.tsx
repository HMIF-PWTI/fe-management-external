import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE_API;

export const getActivity = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/kegiatan`,
    {}
  );
  return response;
};
