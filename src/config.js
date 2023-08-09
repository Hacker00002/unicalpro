import axios from "axios";
const workerToken = localStorage.getItem("Authorization");

axios.defaults.baseURL = `https://artmedical.uz/`;

axios.interceptors.request.use((config) => {
  if (workerToken) {
    config.headers.Authorization = `${workerToken}`;
  }
  return config;
});

export default axios;
