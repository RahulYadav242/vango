

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:10000/api"  // your local backend port
      : "https://vango-vrk8.onrender.com/api",  // ✅ your live backend URL
  withCredentials: true,
});
