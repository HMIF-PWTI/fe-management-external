import { HmifPediaResponse } from '@/utils/interface';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getHmifPedia = async () => {
  return axios.get<HmifPediaResponse>(`${API_URL}/api/hmif-pedia`);
};
