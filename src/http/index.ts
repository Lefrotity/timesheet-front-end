import axios from "axios";

export const API_URL = "http://127.0.0.1:8080";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 30000,
  headers: {},
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    localStorage.getItem("token") || ""
  }`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 403)
      window.history.pushState({}, null, "/signin");
  }
);

export default $api;
