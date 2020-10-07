import axios from "axios";
import router from "../router";

const domainURL = "https://k88d02.ml";

const API = axios.create({
  baseURL: `${domainURL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

API.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (
      error.response.status === 401 &&
      router.history.current.name !== "Login"
    ) {
      router.push({ name: "Login" });
    }
    return Promise.reject(error);
  }
);

export default API;
