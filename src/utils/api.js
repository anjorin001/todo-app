import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskly-rz03.onrender.com/api/v1',
});

// Automatically attach token from localStorage to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;