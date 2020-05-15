import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-socialapp-703ff.cloudfunctions.net/api",
});

export default api;
