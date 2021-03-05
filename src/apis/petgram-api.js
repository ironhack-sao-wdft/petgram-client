import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use(async (config) => {
  const storedUser = localStorage.getItem("loggedInUser");

  const loggedInUser = JSON.parse(storedUser || '""');

  config.headers = {
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  return config;
});

export default api;
