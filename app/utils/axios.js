"use client";

import Axios from "axios";

let axiosInstance;

if (typeof window !== "undefined") {
  axiosInstance = Axios.create({
    baseURL: process.env.MONGODB_URI,
    headers: { "Content-Type": "application/json" },
  });

  const token = localStorage.getItem("authUser") ?? {};

  const axiosConfiguration = (config) => {
    if (token)
      config.headers = {
        ...(config.headers || {}),
        Authorization: token,
      };
    return config;
  };

  Axios.interceptors.request.use(axiosConfiguration);

  Axios.interceptors.response.use(
    (res) => {
      return res.data;
    },

    async (error) => {
      if (error.response === undefined) {
        console.log("error", "Network Error: Please refresh and try again.");
        return;
      }

      const res = error.response;
      if (res.status === 401 && token) {
        window.location.href = "/login";
        localStorage.clear();
        return;
      }

      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
