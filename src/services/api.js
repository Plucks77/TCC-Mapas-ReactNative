import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-tcc.herokuapp.com/"
});

export default api;
//http://10.0.2.2:3333/
//http://192.168.29.78/
//http://192.168.29.1/
