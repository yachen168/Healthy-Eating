import axios from "axios";
const domainURL = "https://k88d02.ml";

const API = axios.create({
  baseURL: `${domainURL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default API;
