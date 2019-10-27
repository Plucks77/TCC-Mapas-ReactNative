import axios from "axios";

const api = axios.create({
  baseURL: "https://5a074f65.ngrok.io/api"
});

export default api;
