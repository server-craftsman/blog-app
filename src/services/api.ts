import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66f187c4415379191551492f.mockapi.io', // Fallback to mock API
});

export default api;
