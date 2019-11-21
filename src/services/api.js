import axios from "axios";

import configVars from "../configs/config";
import authService from "./auth";

const api = axios.create({
  baseURL: configVars.apiUrl
});

// insert token in requests
api.interceptors.request.use(async config => {
  const token = authService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
