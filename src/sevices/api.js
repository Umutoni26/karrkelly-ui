import axios from 'axios';

const API_BASE_URL = 'http://localhost:8009/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProducts = async () => {
  const response = await api.get('/products/get-all');
  return response.data.products;
};

export default api;
