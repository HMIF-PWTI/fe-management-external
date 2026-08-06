
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE_API;

export const getProduct = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/produk`,
    {}
  );
  return response;
};
