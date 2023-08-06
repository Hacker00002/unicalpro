import axios from "axios";
const workerToken = localStorage.getItem("Authorization");

axios.defaults.baseURL = `http://3.71.77.21:3000/`;

axios.interceptors.request.use((config) => {
  if (workerToken) {
    config.headers.Authorization = `${workerToken}`;
  }
  return config;
});

export default axios;
