import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-3hq3.onrender.com",
  withCredentials: true,
});
