import axios from 'axios';

export const API_BASE = 'https://flowguard-api.onrender.com';

const api = axios.create({
  baseURL: API_BASE,
});

export default api;